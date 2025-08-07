# seminar
Our seminar blog

your-project-name/
├── _config.yml                    # Jekyll配置文件（包含sass配置）
├── _data/
│   ├── upcoming_seminars.yml      # 下周seminar预告数据
│   └── past_seminars.yml          # 往期seminar记录数据
├── _includes/
│   ├── head.html                  # HTML头部
│   ├── header.html                # 页面头部导航
│   ├── seminar_card.html          # seminar卡片组件
│   └── footer.html                # 页面底部
├── _layouts/
│   ├── default.html               # 默认布局
│   └── home.html                  # 首页布局
├── _sass/                         # SCSS partial文件目录（重要）
│   ├── _base.scss                 # 基础样式（必须以_开头）
│   ├── _layout.scss               # 布局样式（必须以_开头）
│   └── _components.scss           # 组件样式（必须以_开头）
├── assets/
│   ├── css/
│   │   └── style.scss             # 主样式文件（包含front matter）
│   ├── js/
│   │   └── main.js                # 主JavaScript文件
│   ├── images/
│   │   ├── seminars/              # seminar背景图片目录
│   │   └── icons/                 # 图标目录
│   └── files/                     # PPT文件存放目录
│       └── (上传的PPT文件)
├── index.md                       # 首页
├── Gemfile                        # Ruby依赖
└── README.md                      # 项目说明

注意事项：
1. _sass目录中的文件必须以下划线(_)开头
2. assets/css/style.scss必须包含front matter（---分隔符）
3. Jekyll会自动处理SCSS导入和编译
4. 最终生成的CSS文件会在_site/assets/css/style.css