var tipuesearch = {"pages":[{"title":"2024 Spring 課程 w10","text":"任務1 from browser import window, ajax def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2bstud-2bsite/downloads/2b.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 印出結果 print(data) else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 呼叫函式讀取 CSV 資料 fetch_csv_data() 只要透過 for 重複迴圈, 就可以從上列資料中每位學員的基本資料 (學號、Github 帳號與組別) 中直接在網頁建立所需的 html. 並列出-學員倉儲連結/學員網站連結/2a 分組倉儲連結 template: https://github.com/mdecd2024/2a-midag組別 下列程式碼是加上了生成 HTML 元素的程式碼，以及學員倉庫連結和網站連結的模板： from browser import window, ajax, document, html def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2astud-2asite/downloads/2a.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 印出結果 print(data) # 生成 HTML 元素 generate_html(data) else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 生成 HTML 元素 def generate_html(data): brython_div = document[\"brython_div1\"] course_title = \"cd2024\" for student_id, github_username, group in data: # 如果GitHub用戶名為空，將其設置為\"000\" github_username = github_username if github_username else \"000\" # 創建網址和倉庫的鏈接 site_url = f\"https://{github_username}.github.io/{course_title}\" repo_url = f\"https://github.com/{github_username}/{course_title}\" group_repo_url = f\"https://github.com/mdecd2024/2a-midag{group}\" # 生成HTML元素並插入到div中 brython_div <= html.A(student_id, href=site_url) + \" | \" + \\ html.A(\"GitHub Repo\", href=repo_url) + \" | \" + \\ html.A(\"Group Repo\", href=group_repo_url) + html.BR() # 呼叫函式讀取 CSV 資料 fetch_csv_data() 任務2 文章一 : Construction and theoretical study of a ball balancing platform (構建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究) 摘要內容 : 通過實施自動控制理論穩定動態系統時的局限性, 球平衡平臺的構造和理論研究, 通過實施穩定動態系統時的局限性自動控制理論. 通過物理構造的裝置作為理論的演示者, 進一步比較從牛頓力學得出的事實物理和計算機模擬結果. 為了能夠進行比較, 有必要設計一個能夠滿足系統要求的令人滿意的控制器. 在設備和控制方面, 為在平臺上平衡球的系統引入比例積分導數控制器. 進一步允許分析以確定穩定自然不穩定或半穩定系統時的局限性. 建立球體平衡平台的理論模型, 並與實際搭建的平台進行比較. 分析理論與實際結果之間的差異, 探討控制理論與系統實施的挑戰. 文章二 : A real time control system for balancing a ball on a platform with FPGA parallel implementation (用於在平臺上平衡球的即時控制系統，具有FPGA並行實現) 摘要內容 : 在一個FPGA晶元上開發了兩個並行PID控制器，用於獨立控制一個物件的兩個參數。確保了控制物件的PID控制器的輪廓計算的並行處理，調節器的輸出已經歸一化。通過自然類比，提高了在平台上調節球位置的精度。設計的控制器可用於即時控制具有許多受控參數的高速物體。 文章三 : Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach (基於狀態空間方法的雙軸平臺球位控制模擬與實驗研究) 摘要內容 : 本研究詳細設計並比較了三種控制結構，用於自動穩定球在板上的位置和球的軌跡跟蹤。即PD控制器、狀態空間反饋和狀態空間觀測器。所有三種方法都經過設計並進行了實際比較。所有結構都有一個共同的特徵。它是計算控制器參數的方法。通過牛頓方法推導的板上球數學模型和直流電機位置環路控制也是本文的一部分。 文章四：Design and Implementation a Ball Balancing System for Control Theory Course（控制理論課程的球平衡系統設計與實現） 摘要內容：開發一個球平衡系統，使用微控制器和相關控制演算法來保持球在橫樑上的平衡，以通過即時感官反饋調整橫樑的角度。在此過程中，製作了三個原型並相互比較，特別是在合理性和成本方面。通過集成一個伺服電機、一個距離感測器、一個微控制器板和一個機械平臺，可以很容易地設計整個系統。此外，他們將通過微控制器程式設計來理解和實現控制演算法。如果學生對MATLAB知之甚少。開發介面程式以在MATLAB中繪製即時位置曲線。這個簡化的系統將作為連接理論知識和實踐技能的橋樑。所提方法也適用於更複雜的系統。 文章五: Ball on the plate balancing control system (板上球平衡控制系統) 摘要內容 : 平衡問題是一個持續的研究挑戰，適用於從教育到交通的許多興趣領域。二自由度球平衡實驗室試驗台是瞭解控制系統的重要設備。本文重點介紹了在板上平衡球的機械設計。使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 文章六 : 2D Ball Balancer Control using QUARC (使用 QUARC 的 2D 球平衡器控制) 摘要內容 : 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 任務3","tags":"w9","url":"./41123247-w10-blog.html"},{"title":"2024 Spring 課程 w9","text":"2024 Spring 協同產品設計實習課程教導, w1-w6內容統整 鋼球平衡台 PID 控制與模擬 使用 matplotlib 可視化 CoppeliaSim 鋼球平衡台 PID 控制 由於您沒有提供原本的 PID 控制程式碼，我將提供一個帶有 matplotlib 可視化的示例框架。請將您的 PID 控制邏輯替換到相應位置。 import zmq import time import matplotlib.pyplot as plt ZMQ 參數 context = zmq.Context() socket = context.socket(zmq.REQ) socket.connect(\"tcp://localhost:23000\") PID 控制參數 (請根據您的實際情況調整) Kp = 1.0 Ki = 0.1 Kd = 0.01 初始化 prev_error = 0 integral = 0 x_history = [] y_history = [] 控制迴圈 while True: # 獲取鋼球位置 socket.send_string(\"getBallPosition\") message = socket.recv_string() x, y = map(float, message.split(\",\")) # PID 控制邏輯 (請替換為您的控制邏輯) error = 0 - x # 假設目標位置為 x=0 integral += error * dt derivative = (error - prev_error) / dt output = Kp * error + Ki * integral + Kd * derivative # 發送控制信號 (請根據您的實際情況修改) socket.send_string(f\"setMotorSpeed,{output}\") _ = socket.recv_string() # 紀錄歷史數據 x_history.append(x) y_history.append(y) # 更新誤差 prev_error = error # 延遲 time.sleep(0.01) # 繪製圖表 (例如每 100 步繪製一次) if len(x_history) % 100 == 0: plt.plot(x_history, label=\"X\") plt.plot(y_history, label=\"Y\") plt.legend() plt.xlabel(\"Time\") plt.ylabel(\"Position\") plt.show() Use code with caution. Python 說明: ZMQ 通訊: 使用 ZMQ 與 CoppeliaSim 進行通訊，獲取鋼球位置並發送控制信號。 PID 控制邏輯: 示例中使用一個簡單的 PID 控制邏輯，您需要替換為您的實際控制邏輯。 數據記錄: 紀錄鋼球的 x 和 y 方向座標歷史數據。 matplotlib 可視化: 使用 matplotlib 繪製 x 和 y 方向座標随時間變化的圖表，以便觀察控制效果。 請注意: 您需要根據您的實際情況修改 ZMQ 通訊端口、PID 控制參數、控制信號格式以及繪圖頻率。 確保您已經安裝了必要的 Python 模塊，例如 zmq 和 matplotlib。 希望這個示例框架能幫助您可視化 CoppeliaSim 鋼球平衡台的 PID 控制過程。","tags":"w9","url":"./41123247-w9-blog.html"},{"title":"2024 Spring 課程 w8","text":"2024 Spring 協同產品設計實習課程教導, w1-w6內容統整 w1-w6內容統整 老師所講的內容統整","tags":"w8","url":"./41123247-w7-blog.html"},{"title":"2024 Spring 課程 w6","text":"2024 Spring 協同產品設計實習課程教導, 分組網誌的統整、 Github Actions 帶有子模組的 main.yml 設定、更新分組倉儲中的分組倉儲. Github Actions 帶有子模組的 main.yml 設定 我們所寫的內容丟到個人倉儲, 加上我們有把自己的子模組倒入分組倉儲, 加入取子模組內容的 main.yml 設定把我們所寫的內容整合起來. 其中加入取子模組內容的設定為: 範例:2b-midbg4 cd_report.tex 中的範例報告第一章, 取自其組員分組網站中的 latex 目錄, 且圖片檔案也是沿用分組倉儲中的設定, 取自組員 images 目錄. 網誌的統整 如何把每個人的網誌整合到分組倉儲內, 整合前先把每個人子模組所連到的倉儲更新到現在狀態, 再利用 pelicanconf py 整合各組員的網誌. 更新分組倉儲中的分組倉儲 cd2024 2a w6 取下子模組, 以及更新學員倉儲內容 先前我們有把每個人的倉儲利用子模組導入組別倉儲, 即使你自己的倉儲有更新內容, 也不會顯示目前更新次數, 如何讓子模組同步就利用 update 更新到最新版本. git submodule update --init cd 學號 git pull origin main cd .. git status git add . git commit -m \"update 學號 子模組\" git push 就完成更新目前的倉儲 此為第六周內容","tags":"w6","url":"./41123247-w6-blog.html"},{"title":"2024 Spring 課程 w5","text":"這週為課堂影片講解上字幕，組長依序分配每個成員所需要完成的影片及逐字稿，並上傳至YouTube，且在動態上打出摘要且心得。 上字幕 w5 2b 分組任務 請各組自行搜尋前面已經發布的教學影片, 分別在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點","tags":"w5","url":"./41123247-w5-blog.html"},{"title":"2024 Spring 課程 w4","text":"2024 Spring 協同產品設計實習課程教導, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時可導入 SourceTree 協助各組員更清楚看到倉儲改版歷程, 與本週分組作業. 分組任務 教學影片分組整理並自評: * 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 * 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 * 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 Github 個人與分組倉儲的維護方式 個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 \"-\" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次. * 方法一 - Replit * 方法二 - Codespaces * 方法三 - Gitpod * 方法四 - localhost 此為第四周內容","tags":"w4","url":"./41123247-w4-blog.html"},{"title":"2024 Spring 課程 w3","text":"2024 Spring 協同產品設計實習課程教導, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. 子模組 如何利用 Github Codespaces 建立, cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站. 先 git submodule add 自己的倉儲空格學號, git add . , git commit -m \"add 學號 submodule\" , 最後在 git push. 期中報告 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2a-midbgx_report.pdf 的製作. 此為第三周內容","tags":"w3","url":"./41123247-w3-blog.html"},{"title":"2024 Spring 課程 w2","text":"2024 Spring 協同產品設計實習課程教導, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. 利用 Github Classroom 指定分組倉儲 分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 建立新 replit 先點 Create a Repl 再點 Import from GitHub 利用 From URL 把組別倉儲連結丟進來 (利用這個 My Repositories 是找不到的) , 選取 Python 語言, 按下 Import from GitHub 成功建立, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰 (每個人都要建立一個才有權限) 送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH (git@github.com:自己的帳號/cd2024.git) , 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版權限, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 利用 Codespaces 維護倉儲與網站 利用 init_replit 指令安裝所需 Python 模組 啟動動態 指令 1.chmod u+x init_replit 2. ./init_replit 3. Python3 main.py 靜態 指令 Python3 -m http.server Push 指令 1.git add . 2. git commit -m \" add+你要推的內容 \" 3. git push 此為第二周內容","tags":"w2","url":"./41123247-w2-blog.html"},{"title":"2024 Spring 課程 w1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41123247-w1-blog.html"}]};