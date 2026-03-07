// 科研项目数据
const researchProjects = [
  //{ type: 'xx项目', count: 'x项', fund: 'xx' },
  { type: '国家自然科学基金委项目', count: '3项', fund: '88' },
  { type: '国家重点研发计划项目', count: '2项', fund: '567' },
  { type: '国家xxx项目', count: '1项', fund: '600' },
  { type: '四川省科技项目', count: '5条', fund: '170' },
  { type: '其他省部级科技项目', count: '7项', fund: '299' },
  { type: '横向委托', count: '2项', fund: '238' }
];

// 科研与实验平台数据 
const researchPlatforms = [
  //{ name: 'xxx实验室', desc: 'xxxx'},
  { name: '异构无人平台协同控制实验室', desc: '配备无人机、无人车、机械狗等异构无人装备及边缘智能计算节点，具备复杂场景下多平台协同感知、动态任务调度与路径规划的仿真测试能力，支持异构平台统一建模、跨域协同控制算法等前沿关键技术研究。' },
  { name: '无人系统协同通信实验平台', desc: '配备软件定义无线电、自组织网络节点及复杂环境模拟器，具备极端场景下通信链路稳定性测试、抗干扰性能验证能力，支持自组织网络拓扑优化、AI 自适应路由协议等前沿关键技术研究。' },
  { name: '无人系统安全攻防测试平台', desc: '配备虚实结合仿真系统、攻击模拟终端及密码防护测试设备，具备无人系统漏洞挖掘、攻防演练与安全评估能力，支持网络威胁溯源、控制安全防护策略等前沿关键技术研究。' },
  { name: '工业大模型研发与应用中心', desc: '配备 GPU 计算集群、工业多模态数据集库及模型训练平台，具备工业大模型预训练、微调与推理性能测试能力，支持领域知识增强预训练、工业场景智能决策算法等前沿关键技术研究。' }
];

document.addEventListener('DOMContentLoaded', function () {
  // 渲染科研项目表格
  const projectDiv = document.querySelector('.project');
  if (projectDiv) {
    const table = projectDiv.querySelector('table');
    if (table) {
      const tbody = table.querySelector('tbody');
      if (tbody) {
        tbody.innerHTML = ''; // 清空静态行
        researchProjects.forEach((item, index) => {
          const tr = document.createElement('tr');
          [index + 1, item.type, item.count, item.fund].forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });
      }
    }
  }

  // 渲染科研与实验平台
  const platformCategory = document.querySelector('.platform .platform-category');
  if (platformCategory) {
    platformCategory.innerHTML = ''; // 清空原有静态内容
    researchPlatforms.forEach(item => {
      const platformItem = document.createElement('div');
      platformItem.className = 'platform-item';

      const nameDiv = document.createElement('div');
      nameDiv.className = 'platform-name';
      nameDiv.textContent = item.name;

      const descDiv = document.createElement('div');
      descDiv.className = 'platform-desc';
      descDiv.textContent = item.desc;

      const br = document.createElement('br');

      platformItem.appendChild(nameDiv);
      platformItem.appendChild(descDiv);
      platformItem.appendChild(br);
      platformCategory.appendChild(platformItem);
    });
  }
});