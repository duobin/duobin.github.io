const intro = [
    "无人系统AI大数据创新研究团队依托人工智能与无人系统交叉学科优势及产学研协同创新平台组建，长期聚焦无人系统与人工智能领域前沿技术突破，主攻方向包括异构无人系统跨域协同、无人系统智能组网、无人系统安全、工业人工智能与工业软件，核心技术已广泛服务于应急救援、智慧城市、智能制造、公共安全等关键领域，为行业智能化升级提供核心技术支撑。团队主要成员有9人，包括教授2人，副教授3人，讲师4人，硕士研究生30余人。",
    "团队在无人系统与AI交叉领域的研究处于国内先进水平，累计在IEEE Transactionson Wireless Communications、IEE Transactions on Intelligent Transportation Systems、IEEE Internet of Things Journal、《电信科学》等国内外权威期刊发表SCI/EI论文120余篇(其中二区以上期刊40余篇)，相关成果入选领域高被引论文3篇，累计引用2000余次；承担国家自然科学基金、省部级重点研发计划等项目20余项，获省部级科技进步二等奖2项、三等奖1项。申请国际、国家专利20余项，获软件著作权30余项，研究成果已成功转化应用于10余家行业龙头企业，形成多项核心技术专利与行业解决方案。",
    "目前已建成“异构无人平台协同控制实验室”、“无人系统协同通信实验平台”、“无人系统安全攻防测试平台”和“工业大模型研发与应用中心”4个核心实验平台，涵盖四大研究方向，配备高精度传感器、异构无人装备、边缘计算节点、高性能算力服务器等先进设备，可充分支撑前沿技术研发、教学实践与产学研合作，为青年教师、研究生提供国际化学术视野与高水乎科研实践平台。"];
const researchDirection = [
    { title: '异构无人系统跨域协同关键技术及应用', detail: '无人机、无人车、无人船等异构无人平台各具优势，但单一平台难以满足复杂任务需求本方向研究异构无人平台跨域协同感知、任务分配、路径规划等关键技术，实现多平台协同作业，提升测绘、物流、巡检、救援等任务的效率和精度。具体研究内容包括：异构无人平台统一建模与协同感知方法、基于任务分解的多平台协同任务分配算法、复杂环境下的多平台协同路径规划与避障策略等。通过构建高效、智能的异构无人平台协同作业系统，为智慧城市、智能交通、资源勘探等领域提供技术支撑。' },
    { title: '无人系统智能组网与应急通信', detail: '随着自然灾害和公共安全事件的频发，传统通信网络在复杂环境下往往面临瘫痪风险难以满足应急通信需求。本方向针对这一挑战，研究无人系统自组织网络、智能路由、协同通信等关键技术，构建高效、可靠、抗毁的无人系统应急通信网络。具体研究内容包括：面向复杂环境的无人系统自组织网络拓扑构建与优化、基于深度强化学习的智能路由算法、多无人系统协同通信协议设计与性能优化等，实现无人系统在无网络覆盖或网络受损情况下的自主组网和可靠通信，为应急救援、灾害监测等场景提供通信保障。' },
    { title: '无人系统安全', detail: '无人系统在国防、公共安全等领域的应用日益广泛，其安全问题也日益突出。本方向研究无人系统网络安全、数据安全、工控安全等关键技术，构建无人系统安全防护体系，保障无人系统安全可靠运行。具体研究内容包括：无人系统网络安全威胁分析与防御机制、基于密码学的无人系统数据安全保护技术、无人系统控制安全风险评估与防护策略等。研究目标是提升无人系统在复杂网络环境下的安全防护能力，为无人系统在国防安全、公共安全等领域的应用保驾护航。' },
    { title: '工业大模型关键技术及应用', detail: '工业大模型是人工智能与工业领域深度融合的产物，具有广阔的应用前景。本方向研究工业大模型预训练、微调、推理等关键技术，构建面向工业领域的知识图谱和智能决策系统，推动工业智能化升级。具体研究内容包括:面向工业领域的多模态数据预训练方法、基于领域知识的工业大模型微调技术、工业大模型高效推理算法等。通过构建高效、可靠的工业大模型应用平台并研发可信智能工业软件，为智能制造、工业互联网、智慧能源等领域提供智能化解决方案。' },
    // {title:'',detail:''},
]

const introPart = document.getElementById('intro');
const groupDire = document.getElementById('item-list-direction');
intro.forEach(item => {
    addIntro(introPart, item);
})
researchDirection.forEach((item, index) => {
    console.log(item)
    addgroupDire(groupDire, item, index);
})

function addIntro(parent, item) {
    var itemElement = document.createElement('p');
    itemElement.textContent = `${item}`
    itemElement.style.textIndent = '2em';
    parent.appendChild(itemElement);
}

function addgroupDire(parent, item, index) {
    var itemElement = document.createElement('li');
    itemElement.innerHTML = `
                        <p>研究方向${index + 1}：${item.title}</p>
                        <p class='direDetail'>
                            ${item.detail}
                        </p>
                    `;
    parent.appendChild(itemElement);
}
