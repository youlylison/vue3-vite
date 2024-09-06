module.exports = {
  types: [
    { value: "feat", name: "Features -- feat: 新增客户管理模块" },
    { value: "fix", name: "Bug Fixes -- fix: 修复登录退出未请求服务端接口" },
    { value: "perf", name: "Performance Improvements -- perf: 提升性能、体验" },
    { value: "revert", name: "Reverts -- revert: 回滚到上一个版本" },
    { value: "docs", name: "Documentation -- docs: 操作说明文档完善补充协议" },
    { value: "style", name: "Styles -- style: 登录页面背景颜色调整至灰白色" },
    {
      value: "refactor",
      name: "Code Refactoring -- refactor: 重构数据列表，优化性能",
    },
    { value: "test", name: "Tests -- test: 登录页面测试环境调试" },
    { value: "build", name: "Build System -- build: 环境变量调整，增加依赖" },
    {
      value: "ci",
      name: "Continuous Integration -- ci: 修改k8s, docker的配置信息",
    },
  ],
  messages: {
    type: "选择提交类型:",
    customScope: "请输入此更改的范围(可选):",
    subject: "请简要描述提交信息(必填):",
    body: '请输入详细描述(可选，使用"|"换行):',
    breaking: '请列举相关重大变更信息(可选，使用"|"换行)',
    footer: "请列举关联issue(可选，例如：#1，#5)",
    confirmCommit: "确认使用以上信息提交",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: [],
  subjectLimit: 100,
};
