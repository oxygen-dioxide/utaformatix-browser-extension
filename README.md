# Utaformatix浏览器插件
一款浏览器插件，用于在多种歌声合成工程文件之间互相转换。

Utaformatix浏览器插件基于[Utaformatix](https://github.com/sdercolin/utaformatix3)

## 安装
目前仅支持Chromium内核浏览器
### [推荐从Edge Chromium插件商店安装](https://microsoftedge.microsoft.com/addons/detail/utaformatix/ldobeiiojaiobaijihggopebgmaijjjh)

### 手动安装
1. 下载项目的 zip 文件，在右上方有个 `Download ZIP`, 解压到本地

2. chrome 右上角的设置按钮下找到更多工具，打开`扩展程序`

3. 选择 `加载已解压的扩展程序`(如果没有显示先选中`开发者模式`)，选中解压后的文件夹，完成！


## 功能
- 支持的输入格式： `.vsqx(3/4)`, `.vpr`, `.vsq`, `.ust`, `.ccs`,`.xml(MusicXML)`, `.musicxml`, `.svp`, `.s5p`, `.dv`, `.ppsf(NT)`
- 支持的输出格式： `.vsqx(4)`, `.vpr`, `.vsq`, `.ust`, `.ccs`, `.xml(MusicXML)`, `.svp`, `.s5p`, `.dv`
- 基本信息：音轨，音符，节拍标记，曲速标记
- 日文歌词转换
    - CV与VCV
    - 假名与罗马音
- 以下文件格式的音高曲线转换
  |    Format    | 音高导入 | 颤音导入 | 音高导出 | 
  | ------------ | ------------ | -------------- | ------------ |
  | VSQ/VSQX/VPR |       ✓      |                |       ✓      |
  |  UST(mode2)  |       ✓      |        ✓       |              |
  |  UST(mode1)  |       ✓      |       N/A      |              |
  |     CCS      |       ✓      |                |       ✓      |
  |     SVP      |       ✓      |        ✓       |       ✓      |
  |     S5P      |       ✓      |                |       ✓      |

