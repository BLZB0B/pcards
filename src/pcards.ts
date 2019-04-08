import WITClient = require("TFS/WorkItemTracking/RestClient");
import Models = require("TFS/WorkItemTracking/Contracts");
import Q = require("q");
const userStoryTemplate = require("./templates/user-story.handlebars");
const bugTemplate = require("./templates/bug.handlebars");
const taskTemplate = require("./templates/task.handlebars");
const backlogTemplate = require("./templates/backlog.handlebars");
const featureTemplate = require("./templates/feature.handlebars");

const extensionContext = VSS.getExtensionContext();
const client = WITClient.getClient();

interface IQuery {
  id: string;
  isPublic: boolean;
  name: string;
  path: string;
  wiql: string;
}

interface IActionContext {
  id?: number;
  workItemId?: number;
  query?: IQuery;
  queryText?: string;
  ids?: number[];
  workItemIds?: number[];
  columns?: string[];
}

const printWorkItems = {
  getMenuItems: (context: any) => {
    let menuItemText = "Pretty Card";
    if (context.workItemIds && context.workItemIds.length > 1) {
      menuItemText = "Pretty Cards";
    }

    return [
      {
        action: (actionContext: IActionContext) => {
          const wids = actionContext.workItemIds ||
            actionContext.ids || [actionContext.workItemId || actionContext.id];

          return getWorkItems(wids)
            .then(workItems => prepare(workItems))
            .then(pages => {
              return Q.all(pages);
            })
            .then((pages: any) => {
              const workItems = document.createElement("div");
              workItems.setAttribute("class", "container border");

              pages.forEach(page => {
                let bugCard: any;
                let userStoryCard: any;
                let taskCard: any;
                let backlogCard: any;
                let featureCard: any;

                if (page.type === "Bug") {
                  bugCard = bugTemplate({
                    number: page.id,
                    title: page.title,
                    repro_steps: page.repro_steps,
                    system_info: page.system_info
                  });
                }

                if (page.type === "User Story") {
                  userStoryCard = userStoryTemplate({
                    number: page.id,
                    title: page.title,
                    description: page.description,
                    acceptance_criteria: page.acceptance_criteria
                  });
                }

                if (page.type === "Task") {
                  taskCard = taskTemplate({
                    number: page.id,
                    title: page.title,
                    description: page.description
                  });
                }

                if (page.type === "Product Backlog Item") {
                  backlogCard = backlogTemplate({
                    number: page.id,
                    title: page.title,
                    description: page.description,
                    acceptance_criteria: page.acceptance_criteria
                  });
                }

                if (page.type === "Feature") {
                  featureCard = featureTemplate({
                    number: page.id,
                    title: page.title,
                    description: page.description,
                    problemoropportunity: page.problemoropportunity,
                    revenueamount: page.revenueamount,
                    timesaving: page.timesaving,
                    costsaving: page.costsaving,
                    sponsor: page.sponsor,
                    priority: page.priority
                  });
                }

                if (page.type === "Bug") {
                  workItems.innerHTML += bugCard;
                }
                if (page.type === "User Story") {
                  workItems.innerHTML += userStoryCard;
                }
                if (page.type === "Task") {
                  workItems.innerHTML += taskCard;
                }
                if (page.type === "Product Backlog Item") {
                  workItems.innerHTML += backlogCard;
                }
                if (page.type === "Feature") {
                  workItems.innerHTML += featureCard;
                }
                if (page.type !== "User Story" && page.type !== "Bug" && page.type !== "Task" && page.type !== "Product Backlog Item" &&  page.type !== "Feature") {
                  workItems.innerHTML += "<div class='container'>Work item type not supported. Submit pull requests here: https://github.com/blzb0b/pcards</div>";
                  workItems.innerHTML += "page type: " + page.type;
                }
              });
              document.body.appendChild(workItems);

              setTimeout(() => {
                window.focus(); // needed for IE
                let ieprint = document.execCommand("print", false, null);
                if (!ieprint) {
                  (window as any).print();
                }
                workItems.parentElement.removeChild(workItems);
              }, 1000);
            });
        },
        icon: "static/img/print14.png",
        text: menuItemText,
        title: menuItemText
      } as IContributedMenuItem
    ];
  }
};

// Promises
function getWorkItems(wids: number[]): IPromise<Models.WorkItem[]> {
  return client.getWorkItems(
    wids,
    undefined,
    undefined,
    Models.WorkItemExpand.Fields
  );
}

function prepare(workItems: Models.WorkItem[]) {
  return workItems.map(item => {
    let result = {};

    if (item.fields["System.WorkItemType"] === "User Story") {
      result = {
        "type": item.fields["System.WorkItemType"],
        "title": item.fields["System.Title"],
        "description":  item.fields["System.Description"],
        "acceptance_criteria":  item.fields["Microsoft.VSTS.Common.AcceptanceCriteria"],
        "id":  item.fields["System.Id"]
      };
    }

    if (item.fields["System.WorkItemType"] === "Bug") {
      result = {
        "type": item.fields["System.WorkItemType"],
        "title": item.fields["System.Title"],
        "repro_steps":  item.fields["Microsoft.VSTS.TCM.ReproSteps"],
        "system_info":  item.fields["Microsoft.VSTS.TCM.SystemInfo"],
        "id":  item.fields["System.Id"]
      };
    }

    if (item.fields["System.WorkItemType"] === "Task") {
      result = {
        "type": item.fields["System.WorkItemType"],
        "title": item.fields["System.Title"],
        "description":  item.fields["System.Description"],
        "id":  item.fields["System.Id"]
      };
    }

    if (item.fields["System.WorkItemType"] === "Product Backlog Item") {
      result = {
        "type": item.fields["System.WorkItemType"],
        "title": item.fields["System.Title"],
        "description":  item.fields["System.Description"],
        "acceptance_criteria":  item.fields["Microsoft.VSTS.Common.AcceptanceCriteria"],
        "id":  item.fields["System.Id"]
      };
     }

     if (item.fields["System.WorkItemType"] === "Feature") {
      result = {
        "type": item.fields["System.WorkItemType"],
        "title": item.fields["System.Title"],
        "problemoropportunity":  item.fields["Custom.ProblemorOpportunity"],
        "acceptance_criteria":  item.fields["Microsoft.VSTS.Common.AcceptanceCriteria"],
        "priority": item.fields["Microsoft.VSTS.Common.Priority"],
        "businessvalue": item.fields["Microsoft.VSTS.Common.BusinessValue"],
        "timesaving": item.fields["Custom.TimeSaving"],
        "costsaving": item.fields["Custom.CostSaving"],
        "businessrisk": item.fields["Custom.BusinessRisk"],
        "usabilityimprovemment": item.fields["Custom.UsabilityImprovement"],
        "sponsor": item.fields["Custom.Sponsor"],
        "id":  item.fields["System.Id"]
      };
     }

    return result;
  });
}

VSS.register(
  `${extensionContext.publisherId}.${
    extensionContext.extensionId
  }.print-work-item`,
  printWorkItems
);