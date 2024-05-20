"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2297],{75510:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=o(85893),i=o(11151);const c={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/code-execution/cli-code-executor.ipynb",source_notebook:"/website/docs/topics/code-execution/cli-code-executor.ipynb",title:"Command Line Code Executor"},r="Command Line Code Executor",a={id:"topics/code-execution/cli-code-executor",title:"Command Line Code Executor",description:"Open In Colab",source:"@site/docs/topics/code-execution/cli-code-executor.mdx",sourceDirName:"topics/code-execution",slug:"/topics/code-execution/cli-code-executor",permalink:"/autogen/docs/topics/code-execution/cli-code-executor",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/code-execution/cli-code-executor.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/code-execution/cli-code-executor.ipynb",source_notebook:"/website/docs/topics/code-execution/cli-code-executor.ipynb",title:"Command Line Code Executor"},sidebar:"docsSidebar",previous:{title:"User Guide",permalink:"/autogen/docs/topics"},next:{title:"Custom Code Executor",permalink:"/autogen/docs/topics/code-execution/custom-executor"}},s={},d=[{value:"Docker",id:"docker",level:2},{value:"Inspecting the container",id:"inspecting-the-container",level:3},{value:"Example",id:"example",level:3},{value:"Combining AutoGen in Docker with a Docker based executor",id:"combining-autogen-in-docker-with-a-docker-based-executor",level:3},{value:"Local",id:"local",level:2},{value:"Example",id:"example-1",level:3},{value:"Using a Python virtual environment",id:"using-a-python-virtual-environment",level:2},{value:"Example",id:"example-2",level:3},{value:"Assigning to an agent",id:"assigning-to-an-agent",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"command-line-code-executor",children:"Command Line Code Executor"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/website/docs/topics/code-execution/cli-code-executor.ipynb",children:(0,t.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/website/docs/topics/code-execution/cli-code-executor.ipynb",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,t.jsx)(n.p,{children:"Command line code execution is the simplest form of code execution.\nGenerally speaking, it will save each code block to a file and the\nexecute that file. This means that each code block is executed in a new\nprocess. There are two forms of this executor:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Docker\n(",(0,t.jsx)(n.a,{href:"../../../docs/reference/coding/docker_commandline_code_executor#dockercommandlinecodeexecutor",children:(0,t.jsx)(n.code,{children:"DockerCommandLineCodeExecutor"})}),") -\nthis is where all commands are executed in a Docker container"]}),"\n",(0,t.jsxs)(n.li,{children:["Local\n(",(0,t.jsx)(n.a,{href:"../../../docs/reference/coding/local_commandline_code_executor#localcommandlinecodeexecutor",children:(0,t.jsx)(n.code,{children:"LocalCommandLineCodeExecutor"})}),") -\nthis is where all commands are executed on the host machine"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This executor type is similar to the legacy code execution in AutoGen."}),"\n",(0,t.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,t.jsxs)(n.p,{children:["The\n",(0,t.jsx)(n.a,{href:"../../../docs/reference/coding/docker_commandline_code_executor#dockercommandlinecodeexecutor",children:(0,t.jsx)(n.code,{children:"DockerCommandLineCodeExecutor"})}),"\nwill create a Docker container and run all commands within that\ncontainer. The default image that is used is ",(0,t.jsx)(n.code,{children:"python:3-slim"}),", this can\nbe customized by passing the ",(0,t.jsx)(n.code,{children:"image"})," parameter to the constructor. If\nthe image is not found locally then the class will try to pull it.\nTherefore, having built the image locally is enough. The only thing\nrequired for this image to be compatible with the executor is to have\n",(0,t.jsx)(n.code,{children:"sh"})," and ",(0,t.jsx)(n.code,{children:"python"})," installed. Therefore, creating a custom image is a\nsimple and effective way to ensure required system dedendencies are\navailable."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the executor as a context manager to ensure the container is\ncleaned up after use. Otherwise, the ",(0,t.jsx)(n.code,{children:"atexit"})," module will be used to\nstop the container when the program exits."]}),"\n",(0,t.jsx)(n.h3,{id:"inspecting-the-container",children:"Inspecting the container"}),"\n",(0,t.jsxs)(n.p,{children:["If you wish to keep the container around after AutoGen is finished using\nit for whatever reason (e.g.\xa0to inspect the container), then you can set\nthe ",(0,t.jsx)(n.code,{children:"auto_remove"})," parameter to ",(0,t.jsx)(n.code,{children:"False"})," when creating the executor.\n",(0,t.jsx)(n.code,{children:"stop_container"})," can also be set to ",(0,t.jsx)(n.code,{children:"False"})," to prevent the container\nfrom being stopped at the end of the execution."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from pathlib import Path\n\nfrom autogen.coding import CodeBlock, DockerCommandLineCodeExecutor\n\nwork_dir = Path("coding")\nwork_dir.mkdir(exist_ok=True)\n\nwith DockerCommandLineCodeExecutor(work_dir=work_dir) as executor:\n    print(\n        executor.execute_code_blocks(\n            code_blocks=[\n                CodeBlock(language="python", code="print(\'Hello, World!\')"),\n            ]\n        )\n    )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"exit_code=0 output='Hello, World!\\n' code_file='coding/tmp_code_07da107bb575cc4e02b0e1d6d99cc204.py'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"combining-autogen-in-docker-with-a-docker-based-executor",children:"Combining AutoGen in Docker with a Docker based executor"}),"\n",(0,t.jsx)(n.p,{children:"It is desirable to bundle your AutoGen application into a Docker image.\nBut then, how do you allow your containerised application to execute\ncode in a different container?"}),"\n",(0,t.jsxs)(n.p,{children:["The recommended approach to this is called \u201cDocker out of Docker\u201d, where\nthe Docker socket is mounted to the main AutoGen container, so that it\ncan spawn and control \u201csibling\u201d containers on the host. This is better\nthan what is called \u201cDocker in Docker\u201d, where the main container runs a\nDocker daemon and spawns containers within itself. You can read more\nabout this\n",(0,t.jsx)(n.a,{href:"https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To do this you would need to mount the Docker socket into the AutoGen\ncontainer. This can be done by adding the following to the ",(0,t.jsx)(n.code,{children:"docker run"}),"\ncommand:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"-v /var/run/docker.sock:/var/run/docker.sock\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will allow the AutoGen container to spawn and control sibling\ncontainers on the host."}),"\n",(0,t.jsxs)(n.p,{children:["If you need to bind a working directory to the AutoGen container but the\ndirectory belongs to your host machine, use the ",(0,t.jsx)(n.code,{children:"bind_dir"})," parameter.\nThis will allow the main AutoGen container to bind the ",(0,t.jsx)(n.em,{children:"host"})," directory\nto the new spawned containers and allow it to access the files within\nthe said directory. If the ",(0,t.jsx)(n.code,{children:"bind_dir"})," is not specified, it will fallback\nto ",(0,t.jsx)(n.code,{children:"work_dir"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"local",children:"Local"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"The local version will run code on your local system. Use it with caution."})}),"\n",(0,t.jsxs)(n.p,{children:["To execute code on the host machine, as in the machine running AutoGen,\nthe\n",(0,t.jsx)(n.a,{href:"../../../docs/reference/coding/local_commandline_code_executor#localcommandlinecodeexecutor",children:(0,t.jsx)(n.code,{children:"LocalCommandLineCodeExecutor"})}),"\ncan be used."]}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from pathlib import Path\n\nfrom autogen.coding import CodeBlock, LocalCommandLineCodeExecutor\n\nwork_dir = Path("coding")\nwork_dir.mkdir(exist_ok=True)\n\nexecutor = LocalCommandLineCodeExecutor(work_dir=work_dir)\nprint(\n    executor.execute_code_blocks(\n        code_blocks=[\n            CodeBlock(language="python", code="print(\'Hello, World!\')"),\n        ]\n    )\n)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"exit_code=0 output='\\nHello, World!\\n' code_file='coding/065b51a16ee54f3298847518f9e999d7.py'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-a-python-virtual-environment",children:"Using a Python virtual environment"}),"\n",(0,t.jsx)(n.p,{children:"By default, the LocalCommandLineCodeExecutor executes code and installs\ndependencies within the same Python environment as the AutoGen code. You\nhave the option to specify a Python virtual environment to prevent\npolluting the base Python environment."}),"\n",(0,t.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from autogen.code_utils import create_virtual_env\nfrom autogen.coding import CodeBlock, LocalCommandLineCodeExecutor\n\nvenv_dir = ".venv"\nvenv_context = create_virtual_env(venv_dir)\n\nexecutor = LocalCommandLineCodeExecutor(virtual_env_context=venv_context)\nprint(\n    executor.execute_code_blocks(code_blocks=[CodeBlock(language="python", code="import sys; print(sys.executable)")])\n)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"assigning-to-an-agent",children:"Assigning to an agent"}),"\n",(0,t.jsx)(n.p,{children:"These executors can be used to facilitate the execution of agent written\ncode."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from pathlib import Path\n\nfrom autogen import ConversableAgent\nfrom autogen.coding import DockerCommandLineCodeExecutor\n\nwork_dir = Path("coding")\nwork_dir.mkdir(exist_ok=True)\n\nexecutor = DockerCommandLineCodeExecutor(work_dir=work_dir)\n\ncode_executor_agent = ConversableAgent(\n    name="code_executor_agent",\n    llm_config=False,\n    code_execution_config={\n        "executor": executor,\n    },\n    human_input_mode="NEVER",\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When using code execution it is critical that you update the system\nprompt of agents you expect to write code to be able to make use of the\nexecutor. For example, for the\n",(0,t.jsx)(n.a,{href:"../../../docs/reference/coding/docker_commandline_code_executor#dockercommandlinecodeexecutor",children:(0,t.jsx)(n.code,{children:"DockerCommandLineCodeExecutor"})}),"\nyou might setup a code writing agent like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# The code writer agent\'s system message is to instruct the LLM on how to\n# use the Jupyter code executor with IPython kernel.\ncode_writer_system_message = """\nYou have been given coding capability to solve tasks using Python code.\nIn the following cases, suggest python code (in a python coding block) or shell script (in a sh coding block) for the user to execute.\n    1. When you need to collect info, use the code to output the info you need, for example, browse or search the web, download/read a file, print the content of a webpage or a file, get the current date/time, check the operating system. After sufficient info is printed and the task is ready to be solved based on your language skill, you can solve the task by yourself.\n    2. When you need to perform some task with code, use the code to perform the task and output the result. Finish the task smartly.\nSolve the task step by step if you need to. If a plan is not provided, explain your plan first. Be clear which step uses code, and which step uses your language skill.\nWhen using code, you must indicate the script type in the code block. The user cannot provide any other feedback or perform any other action beyond executing the code you suggest. The user can\'t modify your code. So do not suggest incomplete code which requires users to modify. Don\'t use a code block if it\'s not intended to be executed by the user.\nIf you want the user to save the code in a file before executing it, put # filename: <filename> inside the code block as the first line. Don\'t include multiple code blocks in one response. Do not ask users to copy and paste the result. Instead, use \'print\' function for the output when relevant. Check the execution result returned by the user.\n"""\n\nimport os\n\ncode_writer_agent = ConversableAgent(\n    "code_writer",\n    system_message=code_writer_system_message,\n    llm_config={"config_list": [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}]},\n    code_execution_config=False,  # Turn off code execution for this agent.\n    max_consecutive_auto_reply=2,\n    human_input_mode="NEVER",\n)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then we can use these two agents to solve a problem:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import pprint\n\nchat_result = code_executor_agent.initiate_chat(\n    code_writer_agent, message="Write Python code to calculate the 14th Fibonacci number."\n)\n\npprint.pprint(chat_result)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"code_executor_agent (to code_writer):\n\nWrite Python code to calculate the 14th Fibonacci number.\n\n--------------------------------------------------------------------------------\ncode_writer (to code_executor_agent):\n\nSure, we can calculate the Fibonacci series using a few different methods such as recursion, iterative, by using Binet's formula, or by using matrix exponentiation.\n\nBut, since we only need to calculate the 14th number, we will simply use the iterative method as it's the most efficient for this case.\n\nHere is the Python code that solves the task:\n\n```python\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\n\nprint(fibonacci(14))\n```\n\nIn this script, `fibonacci(n)` is a function that calculates the nth Fibonacci number. Inside the function, two variables `a` and `b` are initialised to `0` and `1` which are the first two numbers in the Fibonacci series. Then, a loop runs `n` times (14 times in your case), and in each iteration `a` is replaced with `b` and `b` is replaced with `a + b`, which generates the next number in the series. \n\nThe function returns `a`, which is the nth Fibonacci number. The result is then printed to the console.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING 1 CODE BLOCKS (inferred languages are [python])...\ncode_executor_agent (to code_writer):\n\nexitcode: 0 (execution succeeded)\nCode output: 377\n\n\n--------------------------------------------------------------------------------\ncode_writer (to code_executor_agent):\n\nGreat! The script has successfully computed the 14th Fibonacci number as 377. If you need to compute other Fibonacci numbers, you can simply change the argument in the `fibonacci()` function call. Please let me know if you need help with anything else.\n\n--------------------------------------------------------------------------------\ncode_executor_agent (to code_writer):\n\n\n\n--------------------------------------------------------------------------------\nChatResult(chat_id=None,\n           chat_history=[{'content': 'Write Python code to calculate the 14th '\n                                     'Fibonacci number.',\n                          'role': 'assistant'},\n                         {'content': 'Sure, we can calculate the Fibonacci '\n                                     'series using a few different methods '\n                                     'such as recursion, iterative, by using '\n                                     \"Binet's formula, or by using matrix \"\n                                     'exponentiation.\\n'\n                                     '\\n'\n                                     'But, since we only need to calculate the '\n                                     '14th number, we will simply use the '\n                                     \"iterative method as it's the most \"\n                                     'efficient for this case.\\n'\n                                     '\\n'\n                                     'Here is the Python code that solves the '\n                                     'task:\\n'\n                                     '\\n'\n                                     '```python\\n'\n                                     'def fibonacci(n):\\n'\n                                     '    a, b = 0, 1\\n'\n                                     '    for _ in range(n):\\n'\n                                     '        a, b = b, a + b\\n'\n                                     '    return a\\n'\n                                     '\\n'\n                                     'print(fibonacci(14))\\n'\n                                     '```\\n'\n                                     '\\n'\n                                     'In this script, `fibonacci(n)` is a '\n                                     'function that calculates the nth '\n                                     'Fibonacci number. Inside the function, '\n                                     'two variables `a` and `b` are '\n                                     'initialised to `0` and `1` which are the '\n                                     'first two numbers in the Fibonacci '\n                                     'series. Then, a loop runs `n` times (14 '\n                                     'times in your case), and in each '\n                                     'iteration `a` is replaced with `b` and '\n                                     '`b` is replaced with `a + b`, which '\n                                     'generates the next number in the '\n                                     'series. \\n'\n                                     '\\n'\n                                     'The function returns `a`, which is the '\n                                     'nth Fibonacci number. The result is then '\n                                     'printed to the console.',\n                          'role': 'user'},\n                         {'content': 'exitcode: 0 (execution succeeded)\\n'\n                                     'Code output: 377\\n',\n                          'role': 'assistant'},\n                         {'content': 'Great! The script has successfully '\n                                     'computed the 14th Fibonacci number as '\n                                     '377. If you need to compute other '\n                                     'Fibonacci numbers, you can simply change '\n                                     'the argument in the `fibonacci()` '\n                                     'function call. Please let me know if you '\n                                     'need help with anything else.',\n                          'role': 'user'},\n                         {'content': '', 'role': 'assistant'}],\n           summary='',\n           cost=({'gpt-4-0613': {'completion_tokens': 302,\n                                 'cost': 0.04842,\n                                 'prompt_tokens': 1010,\n                                 'total_tokens': 1312},\n                  'total_cost': 0.04842},\n                 {'gpt-4-0613': {'completion_tokens': 302,\n                                 'cost': 0.04842,\n                                 'prompt_tokens': 1010,\n                                 'total_tokens': 1312},\n                  'total_cost': 0.04842}),\n           human_input=[])\n"})}),"\n",(0,t.jsx)(n.p,{children:"Finally, stop the container. Or better yet use a context manager for it\nto be stopped automatically."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"executor.stop()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(67294);const i={},c=t.createContext(i);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);