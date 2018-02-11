function createProjectData(key, label, description, link) {
  return { key, label, description, link };
}

const projects = [
  createProjectData(
    1,
    "DeveloperTown",
    "I built out the website for DeveloperTown using WordPress.",
  ),
  createProjectData(
    2,
    "Our Sunday Visitor Fusion",
    "Development of church management system that joins many disparate systems and allows users to join groups, pay bills, and many other church functions (not yet launched)."
  ),
  createProjectData(
    3,
    "Interactive Intelligence PureCloud Documentation",
    "Full stack development of the documentation site for Interactive Intelligence (now Genesys) PureCloud - built on WordPress.",
    "help.mypurecloud.com",
  ),
  createProjectData(
    4,
    "StatSims",
    "Implemented user interface to run realistic simulations of NFL games, and providing needed information to fantasy football users (service no longer available).",
  ),
  createProjectData(
    5,
    "ExactTarget HubExchange",
    "Implemented user interface for ExactTarget’s (now Salesforce) app store - HubExchange (hubexchange.s1.marketingcloudapps.com).",
  ),
]

export {
  projects,
}
