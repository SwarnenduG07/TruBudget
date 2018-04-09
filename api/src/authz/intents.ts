/*
 * Resource: Project
 */

export interface CreateProject {
  intent: "create project";
}

export interface ListProjects {
  intent: "list projects";
}

export interface ViewProject {
  intent: "view project";
  projectId: string;
}

export interface ListSubprojects {
  intent: "list subprojects";
  projectId: string;
}

export interface AppendSubproject {
  intent: "append subproject to project";
  projectId: string;
}

/*
 * Resource: Subproject
 */

export interface ViewSubproject {
  intent: "view subproject";
  projectId: string;
  subprojectId: string;
}

export interface AppendWorkflow {
  intent: "append workflow to subproject";
  projectId: string;
  subprojectId: string;
}

/*
 * All intents exported as sum-type:
 */

export type Intent =
  | CreateProject
  | ListProjects
  | ViewProject
  | ListSubprojects
  | AppendSubproject
  | ViewSubproject
  | AppendWorkflow;

export type SimpleIntent =
  | "session.authenticate"
  | "root.permission.list"
  | "root.permission.grant"
  | "root.permission.revoke"
  | "project.list"
  | "project.view"
  | "project.create"
  | "project.assign"
  | "project.update"
  | "project.close"
  | "project.archive"
  | "project.permission.list"
  | "project.permission.grant"
  | "project.permission.revoke"
  | "subproject.list"
  | "subproject.view"
  | "subproject.create"
  | "subproject.assign"
  | "subproject.update"
  | "subproject.close"
  | "subproject.archive"
  | "subproject.permission.list"
  | "subproject.permission.grant"
  | "subproject.permission.revoke"
  | "workflowitem.list"
  | "workflowitem.view"
  | "workflowitem.create"
  | "workflowitem.assign"
  | "workflowitem.update"
  | "workflowitem.close"
  | "workflowitem.archive"
  | "workflowitem.permission.list"
  | "workflowitem.permission.grant"
  | "workflowitem.permission.revoke";
