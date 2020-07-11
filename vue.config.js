module.exports = {
  pluginOptions: {
    electronBuilder: {
      // 主进程入口
      mainProcessFile: 'src/background/main.ts',
      // 监听文件重启主进程
      mainProcessWatch: ['src/background/**'],
    },
  },
};
