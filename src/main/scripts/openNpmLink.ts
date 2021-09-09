import shell from 'shelljs';

const runOpenScript = () => {
  shell.echo('hello world');
  console.log('hello');
};

export default runOpenScript;

// const { exec } = require('child_process');

// export default function start() {
//   // 任何你期望执行的cmd命令，ls都可以
//   const cmdStr1 = 'your command code';
//   const cmdPath = './file/';
//   // 子进程名称
//   let workerProcess;
//   runExec(cmdStr1);
//   function runExec(cmdStr) {
//     workerProcess = exec(cmdStr, { cwd: cmdPath });
//     // 打印正常的后台可执行程序输出
//     workerProcess.stdout.on('data', function (data) {
//       console.log(`stdout: ${data}`);
//     });
//     // 打印错误的后台可执行程序输出
//     workerProcess.stderr.on('data', function (data) {
//       console.log(`stderr: ${data}`);
//     });
//     // 退出之后的输出
//     workerProcess.on('close', function (code) {
//       console.log(`out code：${code}`);
//     });
//   }
// }
