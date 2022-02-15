module.exports = {
  skip: {
    // bump: true,
    commit: true, // 自己确认后手动commit
    tag: true,
    // changelog: true,
  },
  types: [
    { type: 'feat', section: '新特性' },
    { type: 'fix', section: 'Bug修复' },
    { type: 'docs', section: '文档', hidden: true },
    { type: 'chore', section: '配置项' },
    { type: 'style', section: '样式', hidden: true },
    { type: 'refactor', section: '重构', hidden: true },
    { type: 'perf', section: '性能', hidden: true },
    { type: 'test', section: '测试', hidden: true },
    { type: 'build', section: '构建', hidden: true },
    { type: 'ci', section: 'CI' },
    { type: 'revert', section: '回滚', hidden: true },
    { type: 'release', section: '发布', hidden: true },
  ],
  bumpFiles: [
    {
      filename: 'package.json',
      type: 'json',
    },
  ],
};
