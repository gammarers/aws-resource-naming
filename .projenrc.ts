import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  defaultReleaseBranch: 'main',
  typescriptVersion: '5.5.x',
  jsiiVersion: '5.5.x',
  name: '@gammarers/aws-resource-naming',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-resource-naming.git',
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '22.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['3 18 * * 4']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarers.aws-resource-naming',
    module: 'gammarers.aws_resource_naming',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarers.Utils.AWS',
    packageId: 'Gammarers.Utils.AWS.ResourceNaming',
  },
});
project.synth();