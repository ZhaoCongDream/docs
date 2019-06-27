## vue和vscode基本扩展

1. 中文插件 `Chinese (Simplified) Language Pack for Visual Studio Code`
2. 变量起名神器 `Codelf`
3. 自动将px转换成rem单位  `cssrem`
4. 语法检测 `eslint`
5. vue开发者工具 `Vetur`
6. 主题 `Atom One Dark`
7. 图标主题 `seti`

## vscode 个人配置

```json
// 将设置放入此文件中以覆盖默认设置
// 将设置放入此文件中以覆盖默认设置
{
    // 显示垂直标尺的列
    "editor.rulers": [],
    "editor.fontSize": 16,
    "workbench.colorTheme": "Atom One Dark",
    "workbench.iconTheme": "seti",
    // 允许在任何文件中设置断点
    "debug.allowBreakpointsEverywhere": true,
    // 控制工作台底部状态栏的可见性。
    "workbench.statusBar.visible": true,
    // 控制概述标尺周围是否要绘制边框。
    "editor.overviewRulerBorder": false,
    "workbench.editor.tabCloseButton": "right",
    "editor.renderIndentGuides": false,
    "window.zoomLevel": 0,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "workbench.panel.location": "bottom",
    "workbench.editor.showTabs": false,
    "explorer.confirmDelete": false,
    // "editor.cursorStyle": "block",
    // "editor.matchBrackets": false,
    "emmet.syntaxProfiles": {
      "vue-html": "html",
      "vue": "html"
    },
    "editor.smoothScrolling": true,
     // 控制折行方式。可以选择:
    //  - "off" (禁用折行)，
    //  - "on" (根据视区宽度折行)，
    //  - "wordWrapColumn" (在 "editor.wordWrapColumn" 处换行)
    //  - "bounded" (在视区宽度和 "editor.wordWrapColumn" 两者的较小者处换行)。
    "editor.wordWrap": "on",
    // 控制是否在搜索中跟踪符号链接。
    "search.followSymlinks": false,
    "workbench.settings.settingsSearchTocBehavior": "show",
    "workbench.editor.enablePreview": false,
    "editor.cursorBlinking": "solid",
    "workbench.activityBar.visible": false,
    // 保存时，自动保存成ESLint语法
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",{
            "language": "vue",
            "autoFix": true
        },"html",
        "vue"
    ],
    "editor.tabSize": 2,
    "editor.fontFamily": "Source Code Pro, Menlo, Monace",
    "editor.renderLineHighlight": "none",
    "editor.lineHeight": 24,
    "editor.roundedSelection": false,
    "extensions.autoUpdate": true,
}
```

## chrome必备插件

1. vue 开发调试 `vue devtools`