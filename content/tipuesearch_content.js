var tipuesearch = {"pages": [{'title': 'About', 'text': 'pj2第四組 \n 組長：李承翰 41023121 \n 組員：呂佳柔 41023104 王啟騰 41023112 林建維 41023134 \n 網頁\xa0 https://mdecd2023.github.io/2a2-pj2ag4/ \xa0 \n 倉儲\xa0 https://github.com/mdecd2023/2a2-pj2ag4 \xa0 \n cdtemplate \n https://mde.tw/pjcopsim \n', 'tags': '', 'url': 'About.html'}, {'title': 'Schedule', 'text': 'week9-建立 pj2 組別，場景中建立四顆 bubbleRob 並以 zmq 操控 \n week10-協同查驗*5題 \n week11-組員連線，場景觀看，計分板設計 \n', 'tags': '', 'url': 'Schedule.html'}, {'title': 'bubblerob', 'text': '\n', 'tags': '', 'url': 'bubblerob.html'}, {'title': 'w10', 'text': '有關 CoppeliaSim zmqRemoteAPI 問題 \n \n Q. \n \n 1. What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n \n 2. How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n \n 3. What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n \n 4. What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n \n 5. Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n \n \nA. \n \n 1. \n zmqRemoteAPI 是一種輕量級、高效的通訊協議，用於將外部應用程式（例如 Python）與 CoppeliaSim 機器人模擬軟件連接起來。它允許使用者使用一組預定義的函數，從外部應用程式控制模擬。 \n CoppeliaSim 是一種強大的 3D 模擬軟件，用於機器人和自動化開發。它提供了各種建模、模擬和控制機器人和其他自動化系統的工具和功能。使用 zmqRemoteAPI 和 CoppeliaSim 可以使使用者更輕鬆地控制和監視模擬。 \n \n \n \n \n \n \n 2. \n 要使用zmqRemoteAPI在Python腳本與CoppeliaSim之間建立連接，需要完成以下步驟： \n \n \n 下載並安裝ZeroMQ 請先至ZeroMQ官方網站下載ZeroMQ，並進行安裝。 \n \n \n 啟用CoppeliaSim的遠程API 在CoppeliaSim中，需要啟用遠程API，方法是進入菜單欄中的"Tools"->"Remote API"，然後選擇"Enable remote API"，接著選擇"Legacy remote API"。啟用後，CoppeliaSim會自動打開一個端口，等待Python腳本連接。 \n \n \n 在Python腳本中使用zmqRemoteAPI 接下來，在Python腳本中使用zmqRemoteAPI與CoppeliaSim建立連接，示例程式碼如下： \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 這段程式碼首先建立了一個ZMQ連接，並使用 send_string() 和 recv() 方法向\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 CoppeliaSim發送和接收消息。在此示例中，我們向CoppeliaSim發送了兩條消息：第\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 一條是測試連接的消息，第二條是在CoppeliaSim中運行腳本的消息。當然，您可以\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 根據自己的需求發送不同的消息。 \n \n 在CoppeliaSim中編寫適當的腳本 在Python腳本中發送"simxLoadScene()"等消息時，需要在CoppeliaSim中編寫相應的腳本來執行該操作。例如，如果要加載一個場景，需要在CoppeliaSim中編寫一個腳本來加載該場景。可以使用CoppeliaSim提供的Lua腳本語言來編寫這些腳本。在CoppeliaSim的安裝目錄下的"programming/remoteApiBindings/lib/libLua"文件夾中，可以找到相應的遠程API函數和範例腳本。 \n \n \n 3.  \n 在 CoppeliaSim 中，zmqRemoteAPI 是一個非常有用的模塊，它可以用於以下一些常見的應用場景： \n \n \n 控制機器人：zmqRemoteAPI 可以用於控制機器人在 CoppeliaSim 模擬器中的運動和行為，包括設置關節位置、速度和力矩等參數，控制機器人的運動軌跡和姿態，以及獲取機器人的感測器數據和影像信息等。 \n \n \n 編寫自動化測試：zmqRemoteAPI 可以幫助使用者編寫自動化測試脚本，測試機器人和其他物體的運動和行為，並驗證機器人的控制算法和程序的正確性。 \n \n \n 設計自主導航系統：zmqRemoteAPI 可以用於設計自主導航系統，通過控制機器人的運動和行為來實現自主導航，並在 CoppeliaSim 中進行仿真測試。 \n \n \n 進行物體檢測和跟蹤：zmqRemoteAPI 可以用於設計物體檢測和跟蹤系統，通過獲取 CoppeliaSim 中的影像數據和感測器數據來實現物體檢測和跟蹤功能。 \n \n \n 總之，zmqRemoteAPI 可以幫助使用者更加靈活地控制 CoppeliaSim 中的機器人和物體，從而實現更多的應用場景，如機器人控制、自主導航、自動化測試和物體檢測等。 \n \n 4. \n zmqRemoteAPI 是一種輕量級和高效的通信協議，用於連接Python和CoppeliaSim。以下是使用zmqRemoteAPI與其他方法之間的優缺點比較： \n 優點： \n \n 快速和高效：zmqRemoteAPI使用ZeroMQ消息庫，以其快速和高效的消息傳遞能力而聞名。 \n 易於使用：zmqRemoteAPI是一個簡單易用的API，提供了一系列函數，可從Python腳本中控制模擬。 \n 跨語言支持：zmqRemoteAPI是一種跨語言協議，因此您可以使用任何支持ZeroMQ的編程語言。 \n 支持多個連接：zmqRemoteAPI支持多個連接，因此您可以將多個客戶端連接到單個CoppeliaSim實例。 \n \n 缺點： \n \n 功能受限：儘管zmqRemoteAPI提供了一系列函數來控制CoppeliaSim，但與其他通信方法（如ROS或Python的Coppeliasim庫）相比，其功能受限。 \n 較不易使用：zmqRemoteAPI需要一些ZeroMQ和socket編程的知識，這對於新手用戶來說可能不太容易使用。 \n 可能出現錯誤：如果通信未正確配置，zmqRemoteAPI容易出現錯誤，這可能會導致消息丟失或模擬停滯等問題。 \n 彈性較小：與其他通信方法相比，zmqRemoteAPI的自定義彈性較小，因為它依賴於預定義的一組函數。 \n \n 總之，zmqRemoteAPI是用於連接Python和CoppeliaSim的快速和高效的通信協議，但與其他通信方法相比，其功能受限，需要一些ZeroMQ和socket編程的知識。它適用於簡單的模擬或效率至上的應用，但其他通信方法，如ROS或Python的Coppeliasim庫，可能更適合更複雜的應用程序。 \n \n \n 5. \n \xa0 \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': 'bubbleRob.ttt \xa0 \xa0 bubbleRob_zmq_examples.7z \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html>', 'tags': '', 'url': 'Brython_ex2.html'}]};