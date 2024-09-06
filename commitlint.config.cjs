module.exports = {
  extends: ["@commitlint/config-conventional", "cz"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Features -- feat: 新增客户管理模块
        "fix", // Bug Fixes -- fix: 修复登录退出未请求服务端接口
        "perf", // Performance Improvements -- perf: 提升性能、体验
        "revert", // Reverts -- revert: 回滚到上一个版本
        "docs", // Documentation -- docs: 操作说明文档完善补充协议
        "style", // Styles -- style: 登录页面背景颜色调整至灰白色
        "refactor", // Code Refactoring -- refactor: 重构数据列表，优化性能
        "test", // Tests -- test: 登录页面测试环境调试
        "build", // Build System -- build: 环境变量调整，增加依赖
        "ci", // Continuous Integration -- ci: 修改k8s, docker的配置信息
      ],
    ],
    // type 格式固定小写
    "type-case": [2, "always", "lower-case"],
    // type 不能为空
    "type-empty": [2, "never"],
    // scope 格式不启用
    "scope-case": [0],
    // scope 修改范围不能为空
    "scope-empty": [0],
    // subject 不能为空
    "subject-empty": [2, "never"],
    // subject 以什么为结束标志，不启用
    "subject-full-stop": [0],
    // subject 格式，不启用
    "subject-case": [0],
    // 最大长度 100 字符
    "header-max-length": [0, "always", 100],
  },
};
