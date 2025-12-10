//存放研究成果,
/***
 * 注意新的数据全部放到数组最前面
 * 因为显示数据是直接从0开始读取
 * 
 * 
 */
// 期刊论文数据队列（73条）
export const qikanData = [
  `Zhengqiang Wang, Kunhao Huang, Yongjun Xu, <b>Bin Duo</b>, Chengyu Wu, Liuwei Huo. Max-min security energy efficiency optimization for UAV-RIS-enhanced short-packet communication systems[J]. Chinese Journal of Aeronautics, 2025,38(10):103528. (<b>SCI, 中科院1区Top</b>).`,
  `Xinhong Dai, <b>Bin Duo</b>, Xiaojun Yuan, Marco DiRenzo. Energy-Efficient UAV Communications With Directional Antennas: Tilting Effect Modeling and Trajectory Optimization[J]. IEEE Transactions on Vehicular Technology, 2025.74(7):11194-11206. (<b>SCI, 中科院2区Top</b>).`,
  `Fang Xu, Zhijie Xie, Kai Hu,Yu Liu*, Shenghui Song, Thomas Aaron Gulliver, Yiyuan Xie, Yandong Yang, <b>Bin Duo</b>, Yuanchen Wang, Multiantenna UAV-Assisted Hybrid FSO/RF Data Collection for IoT: Optimal Design for Fairness[J]. IEEE Transactions on Aerospace and Electronic Systems, 2025.61(5):12376-12386. (<b>SCI, 中科院2区</b>)`,
  `郑宇翔,刘同*,周让,宁进,李冬芬,<b>多滨</b>，无人异构网络切换方法研究[J],无线电通信技术,已接收. <b>（T2级期刊）</b>`,
  `Lianbin Xie, Jin Ning*, Jie Yin, <b>Bin Duo</b>, Tied and Anchored Stereo Attention Network for Cloud Removal in Optical Remote Sensing Images[J]. IEEE Transactions on Aerospace and Electronic Systems, 2025.61(5):12569-12580. (<b>SCI, 中科院2区</b>)`,
  `林杰,叶蜀新,李苗,<b>多滨</b>,王正强,王梓斌.面向地面干扰环境的无人机辅助边缘计算能效优化[J]，重庆邮电大学学报（自然科学版）2025.37(4):491-499.`,
  `林杰,殷显阳,黄孝庆,李苗,<b>多滨</b>,孙汉明*. 基于TD3的空中移动边缘计算资源调度与能效优化[J]. 物联网技术, 2025 ,15(10) :56-62+66.`,
  `朱家辉,宁进,周艳红,<b>多滨</b>.基于Q-learning的无人机自组网动态SPMA协议[J].计算机应用与软件, 2024(7):1-8`,
  `<b>Bin Duo</b>, Aoqi Kong, Qingqing Wu*, and Xiaojun Yuan. Joint Path and Pick-up Design for Connectivity-Aware UAV-Enabled Multi-Package Delivery[J], IEEE Transactions on Intelligent Transportation Systems, 2024, 25(12): 20017-20031. (<b>SCI, 中科院1区Top</b>).`,
  `Fang Xu, <b>Bin Duo</b>*, Yiyuan Xie, Gaofeng Pan, Yandong Yang, Luozhi Zhang, Yichen Ye, Tingnan Bao, Thomas Aaron Gulliver, Yuanchen Wang. Multi-UAV Assisted Mixed FSO/RF Communication Network for Urgent Tasks: Fairness Oriented Design With DRL[J], IEEE Transactions on Vehicular Technology, 2024, 74(1): 1736-1741 . (<b>SCI，中科院2区Top</b>)`,
  `Yifan Liu, <b>Bin Duo</b>*, Qingqing Wu, Xiaojun Yuan, Jun Li, Yonghui Li. Elevation Angle-Dependent 3D Trajectory Design for Aerial RIS-aided Communication[J]. IEEE Transactions on Intelligent Transportation Systems, 2024, 25(3): 2696-2702. (<b>SCI, 中科院1区Top</b>).`,
  `罗俊松,黄平,罗欣悦,赖欢,<b>多滨*</b>,袁晓军，空中可重构智能表面辅助的全双工无人机安全通信[J]，电信科学，2024, 40(07): 34-50. (T1级期刊)`,
  `Zhenyang Cai, Jin Ning, Zhiheng Ding, <b>Bin Duo</b>. Additional self-attention transformer with adapter for thick haze removal[J]. IEEE Geoscience and Remote Sensing Letters, 2024.21:1-5. <b>(SCI，中科院3区)</b>`,
  `Zhengqiang Wang, Kunhao Huang, Qinghe Zheng*, <b>Bin Duo</b>, Liuwei Huo, Mingqiang Yang. Resource Allocation for UAV-RIS-Assisted NOMA-Based URLLC Systems[J]. Drones. 2024, 8(7):301. (<b>SCI, 中科院2区</b>)`,
  `王正强,何鲁娜,樊自甫,万晓榆,<b>多滨</b>.非完美CSI条件下IRS辅助的NOMA系统安全速率最大化算法[J],中国科学:信息科学.2024, 54(06):1487-1501. (T1级期刊)`,
  `何茂霖,<b>多滨</b>*,胡艳梅,宁进.基于智能超表面的无人机移动边缘计算综述[J].无线电通信技术, 2024, 50(298):349-356. (T2级期刊)`,
  `<b>Bin Duo,</b> Maolin He, Qingqing Wu, Zexu Zhang**.Joint Dual-UAV Trajectory and RIS Design for ARIS-Assisted Aerial Computing in IoT[J], IEEE Internet of Things Journal, 2023, 10(22): 19584-19594. (<b>SCI,中科院1区Top</b>).`,
  `Xinhong Dai, <b>Bin Duo</b>, Xiaojun Yuan, Marco Di Renzo. Energy-Efficient UAV Communications in the Presence of Wind: 3D Modeling and Trajectory Design[J]. IEEE Transactions on Wireless Communications, 2024, 23(3) :1840-1854 (<b>SCI, 中科院1区Top</b>).`,
  `陈丽蓉;罗俊松;宁进;胡艳梅;<b>多滨</b>. 无人机集群智能反制技术的研究现状及展望[J]. 无线电工程, 2024 ,424 (09) :2181-2192. (中文核心)`,
  `王豪，罗俊松，王惠明，王梓斌，<b>多滨*</b>. 无人机射频指纹识别方法综述, 无线电工程[J] 2024,50(11):2672-2684 (中文核心)`,
  `汪 潇，<b>多 滨</b>，赖 欢，罗俊松，宁 进，王梓斌*. 智能反射面辅助的无人机抗干扰通信方法, 电子信息对抗技术, 2024:39，231(5):1-11 (中文核心)`,
  `李苗，何茂霖，罗俊松，宁进，胡艳梅, <b>多滨</b>*. 无人机集群通信技术：最新进展及发展动向[J]. 无线电工程, 2024,54(7):1622-1633. (中文核心)`,
  `Aijia Shen, Junsong Luo*, Jin Ning, Yilian Li, Zibin Wang*, <b>Bin Duo</b>. Safeguarding UAV networks against active eavesdropping: An elevation angle-distance trade-off for secrecy enhancement[J], Drones, 2023,7(2): 109. (<b>SCI, 中科院2区</b>)`,
  `Jin Ning, Yanhong Zhou, Xiaojuan Liao, <b>Bin Duo</b>*. Single remote sensing image dehazing using robust light-dark prior[J], Remote Sensing, 2023, 15(4): 938. (<b>SCI, 中科院2区Top</b>)`,
  `Huan Lai, Dongfen Li,*, Fang Xu, Xiao Wang, Jin Ning, Yanmei Hu, <b>Bin Duo</b>. Optimization of Full-Duplex UAV Secure Communication with the Aid of RIS[J]. Drones,2023, 7(9):591. (<b>SCI, 中科院2区</b>)`,
  `Kaiyuan Tian, Yani Chi, <b>Bin Duo</b>,Xiaojun Yuan. Hybrid offline-online design for reconfigurable intelligent surface aided UAV communication[J].IEEE Communications Letters, 2023, 27(5): 1372-1376. <b>(SCI, 中科院3区)</b>`,
  `Yu Lei, Yifan Liu, Qingqing Wu, Xiaojun Yuan, Jin Ning,Bin Duo. Enhancing UAV-enabled communications via multiple intelligent omni-surfaces[J].IEEE Communications Letters, 2023, 27(2): 655-660. <b>(SCIE，中科院3区)</b>`,
  `付振江, 罗俊松, 宁进, <b>多滨*</b>. 无人机集群通信的应用现状及展望[J]. 无线电工程, 2023, 53(404): 3-10. (中文核心)`,
  `何茂霖，<b>多滨</b>，邱吉刚，罗俊松，袁晓军*. 机载智能超表面和边缘服务器的空中自适应移动边缘计算[J]. 移动通信, 2023, 47(519): 67-74. (T2级期刊)`,
  `王正强, 胡扬, 樊自甫, 万晓榆, 徐勇军, <b>多滨</b>. 无人机辅助的非正交多址反向散射通信系统max-min速率优化算法[J]. 电子与信息学报, 2023, 45(7): 2358-2365. (EI)`,
  `王正强, 青思雨, 万晓榆, 樊自甫, 徐勇军, <b>多滨</b>. IRS辅助的NOMA无人机网络安全速率最大化算法[J], 电子与信息学报, 2023, 45(3): 1-8. (EI)`,
  `周艳红,丁志恒,<b>多滨</b>.无人机群自组网MAC协议综述[J]:无线电工程.2023, 54(423):1917-1927. (中文核心)`,
  `Yifan Liu,<b>Bin Duo</b>,Qingqing Wu,Xiaojun Yuan, Yonghui Li. Full-dimensional rate enhancement for UAV-enabled communications via intelligent omni-surface[J]. IEEE Wireless Communications Letters, 2022, 11(9): 1955-1959. (<b>SCI，中科院2区</b>)`,
  `Kaiyuan Tian , <b>Bin Duo</b>,Sixian Li,Yong Zuo, Xiaojun Yuan. Hybrid Uplink and Downlink Transmissions for Full-Duplex UAV Communication With RIS[J]. IEEE Wireless Communications Letters, 2022, 11(4): 866-870. (<b>SCI，中科院2区</b>)`,

  `Xinhong Dai, <b>Bin Duo</b>, Xiaojun Yuan, Wanbin Tang. Energy-efficient UAV communications: A generalised propulsion energy consumption model[J]. IEEE Wireless Communications Letters, 2022, 11(10): 2150-2154. (<b>SCI，中科院2区</b>)`,
  `Zhiyuan Zhai, Xinhong Dai, <b>Bin Duo</b>, Xin Wang, Xiaojun Yuan. Energy-efficient UAV-mounted RIS assisted mobile edge computing[J]. IEEE Wireless Communications Letters, 2022, 11(21): 2507-2511. (<b>SCI，中科院2区，IF=5.281</b>)`,
  `Abuzar B. M. Adam, Zhengqiang Wang, Xiaoyu Wan,Yongjun Xu, <b>Bin Duo</b>. Energy-efficient power allocation in downlink multi-cell multi-carrier NOMA: Special deep neural network framework[J]. Accepted by IEEE Transactions on Cognitive Communications and Networking, 2022, 8(4): 1770-1783. (<b>SCI，中科院2区</b>)`,
  `Yanmei Hu , Bo Yang, <b>Bin Duo</b>, Xing Zhu. Exhaustive exploitation of local seeding algorithms for community detection in a unified manner[J]. Mathematics, 2022, 10(15): 2807. (<b>SCI，中科院2区</b>)`,
  `<b>Bin Duo,</b> Yilian Li, Hao Hu, Junsong Luo, Yanmei Hu , Zibin Wang. Joint robust 3D trajectory and communication design for dual-UAV enabled secure communications in probabilistic LoS channel[J]. Ad Hoc Networks, 2021, (121): 102592. (<b>SCI，中科院2区</b>)`,
  `<b>Bin Duo,</b> Hao Hu, Yilian Li, Yanmei Hu, Xing Zhu. Robust 3D trajectory and power design in probabilistic LoS channel for UAV-enabled cooperative jamming[J]. Vehicular Communications, 2021, (32): 100387. (<b>SCI，中科院2区</b>)`,
  `<b>Bin Duo</b>,Junsong Luo, Yilian Li, Hao Hu, Zibin Wang. Joint trajectory and power optimization for securing UAV communications against active eavesdropping[J]. China Communications, 2021, 18(1): 88-99. (SCI，中科院3区)`,
  `Sixian Li, <b>Bin Duo</b>, Marco Di Renzo, Meixia Tao, Xiaojun Yuan. Robust secure UAV communications with the aid of reconfigurable intelligent surfaces[J]. IEEE Transactions on Wireless Communications, 2021, 20(10): 6402-6417. (<b>SCI，中科院1区Top</b>)`,
  `<b>Bin Duo,</b> Qingqing Wu,Xiaojun Yuan, Rui Zhang. Anti-jamming 3D trajectory design for UAV-enabled wireless sensor networks under probabilistic LoS channel[J]. IEEE Transactions on Vehicular Technology, 2020, 69(12): 16288-16293. (<b>SCI，中科院2区Top</b>)`,
  `<b>Bin Duo</b>, Qingqing Wu,Xiaojun Yuan,Rui Zhang. Energy efficiency maximization for full-duplex UAV secrecy communication[J]. IEEE Transactions on Vehicular Technology, 2020, 69(4): 4590-4595. (<b>SCI，中科院2区Top</b>)`,
  `Sixian Li, <b>B. Duo</b>, Xiaojun Yuan,Ying-Chang Liang ,Marco Di Renzo. Reconfigurable intelligent surface assisted UAV communication: Joint trajectory design and passive beamforming[J]. IEEE Wireless Communications Letters, 2020, 9(5):716-720. (<b>SCI，中科院2区，ESI高被引，热点论文</b>)`,


];

// 会议论文数据队列（10条）
export const huiyiData = [
  `Boyuan Liu, Xinhong Dai, Xiaojun Yuan,<b>Bin Duo</b>, Xin Wang*, Energy-Efficient UAV-Mounted RIS Assisted Communication with Tilting Effect[C]. 2025 10th International Conference on Computer and Communication System (ICCCS), Chengdu, China, 2025, pp. 1-62. (EI)`,
  `Guohao Lan, Junsong Luo, Jing Ning, Zhangping Li, Dongfen Li, <b>Bin Duo</b>*. A Mutual Authentication and Key Agreement Scheme Based on PUF and Machine Learning for UAV Communications[C]. Springer Aerospace Technology, 2025. (EI)`,
  `Yujia Li, Dong fen Li, Jing Ning, Jie Lin, Zibin Wang, <b>Bin Duo</b>*. Autonomous Drone-Borne Anti-Drone System: Leveraging Deauthentication Attacks for Automated Countermeasures[C]. Springer Aerospace Technology, 2025. (EI) `,
  `Jun Wang, Dongfen Li, Jing Ning, Jie Lin, Zibin Wang, <b>Bin Duo</b>*. An Improved UAV Countermeasure Strategy Based on GPS Spoofing[C]. Springer Aerospace Technology,2025. (EI)`,
  `<b>Bin Duo</b> , Aijia Shen , Yuankai Ning, Mingqian Shao, Jin Ning , Junsong Luo,  Zibin Wang.Multi-RISs Assisted UAV-Enabled Wireless Sensor Network[C]. 2023 International Conference on Advanced Unmanned Aerial Systems (ICAUAS 2023), 2023. (EI)`,
  `Yanhong Zhou, Jin Ning*,Zhiheng Ding, <b>Bin Duo</b>. An Energy-Efficient UAVS Ad Hoc Network MAC Protocol[C]. 2023 IEEE 11th International Conference on Information, Communication and Networks (ICICN 2023). Xi'an, 2023. (EI)`,
  `Mingqian Shao, Yifan Liu, <b>Bin Duo</b>, Jin Ning, Junsong Luo, Xing Zhu, Mingzhe Liu, Zhengqiang Wang. Joint Passive Beamforming and Elevation Angle-Dependent Trajectory Design for RIS-aided UAV-enabled Wireless Sensor Networks[C], IEEE SECON 2022, 2022: 488-496. (EI)`,
  `<b>Bin Duo</b>, Hao Hu, Yilian Li, Xiaojun Yuan.Joint trajectory and power optimization in probabilistic LoS channel for UAV-Enabled cooperative jamming[C], IEEE International Conference on Communications (ICC), 2021, pp. 1-6. (EI)`,
];

// 专著数据队列（2条）
export const zhuanzhuData = [
  `<b>Bin Duo</b>, Xiaojun Yuan and Yifan Liu, Securing Unmanned Aerial Vehicle Networks: Models and Algorithms. Springer, 2023.`
];

// 知识产权数据队列（2条）
export const ipData = [
  `国家发明专利，一种车载无人机协同物流配送系统及方法，2025`,
  `国家发明专利，一种港口空地协同智能自主巡检机器人系统及方法，2025`,
  `国家发明专利，无人机与地面站间的身份认证与密钥协商方法及系统，2025`,
  `软件著作权，多功能配送无人机管理系统，2025`,
  `软件著作权，多跳中继无人机物流配送软件，2025`,
  `软件著作权，无人机系统安全靶场平台，2025`,
  `软件著作权，低慢小无人机目标识别跟踪反制系统，2025`,
  `国际发明专利，A Data Collection Method for UAV - enabled Wireless Sensor Network Assisted by Multiple Reconfigurable Intelligent Surfaces，2024`,
  `国家发明专利，一种基于无人机平台的反制系统及反制方法，2024`,
  `国家发明专利，面向IIoT的具有条件隐私保护的认证密钥协商方法，2024`,
];


// 分页管理类
class PaginationManager {
  constructor(data, containerId, config) {
    this.data = data;
    this.containerId = containerId;
    this.currentPage = 1;
    this.itemsPerPage = config.itemsPerPage || 10;
    this.prevButtonId = config.prevButtonId;
    this.nextButtonId = config.nextButtonId;
    this.currentPageElementId = config.currentPageElementId;
    this.totalPagesElementId = config.totalPagesElementId;
    this.pageSizeSelectId = config.pageSizeSelectId;
    this.statsElementId = config.statsElementId;

    this.init();
  }

  init() {
    this.updateStats();
    this.displayCurrentPage();
    this.setupEventListeners();
  }

  getTotalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  generateItemNumber(index) {
    return index + 1;
  }

  displayCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const currentPageData = this.data.slice(startIndex, endIndex);

    const container = document.getElementById(this.containerId);
    container.innerHTML = '';

    currentPageData.forEach((item, index) => {
      const globalIndex = startIndex + index;
      const itemNumber = this.generateItemNumber(globalIndex);

      const itemElement = document.createElement('div');
      itemElement.className = 'paper-item';
      itemElement.innerHTML = `
                        <div>
                            <span class="paper-number">[${itemNumber}]</span>
                            ${item}
                        </div>
                    `;
      container.appendChild(itemElement);
    });

    this.updatePaginationInfo();
  }

  updatePaginationInfo() {
    const totalPages = this.getTotalPages();

    document.getElementById(this.currentPageElementId).textContent = this.currentPage;
    document.getElementById(this.totalPagesElementId).textContent = totalPages;

    // 更新按钮状态
    document.getElementById(this.prevButtonId).disabled = this.currentPage === 1;
    document.getElementById(this.nextButtonId).disabled = this.currentPage === totalPages;
  }

  updateStats() {
    if (this.statsElementId) {
      document.getElementById(this.statsElementId).textContent = `共${this.data.length}篇`;
    }
  }

  setupEventListeners() {
    document.getElementById(this.prevButtonId).addEventListener('click', () => {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.displayCurrentPage();
      }
    });

    document.getElementById(this.nextButtonId).addEventListener('click', () => {
      if (this.currentPage < this.getTotalPages()) {
        this.currentPage++;
        this.displayCurrentPage();
      }
    });

    document.getElementById(this.pageSizeSelectId).addEventListener('change', (e) => {
      this.itemsPerPage = parseInt(e.target.value);
      this.currentPage = 1;
      this.displayCurrentPage();
    });
  }
}

// 页面加载完成后初始化所有分页管理器
document.addEventListener('DOMContentLoaded', function () {
  // 期刊论文分页
  new PaginationManager(qikanData, 'qikan-list-container', {
    itemsPerPage: 10,
    prevButtonId: 'qikan-prev-page',
    nextButtonId: 'qikan-next-page',
    currentPageElementId: 'qikan-current-page',
    totalPagesElementId: 'qikan-total-pages',
    pageSizeSelectId: 'qikan-page-size-select',
    statsElementId: 'qikan-stats'
  });

  // 会议论文分页
  new PaginationManager(huiyiData, 'huiyi-list-container', {
    itemsPerPage: 5,
    prevButtonId: 'huiyi-prev-page',
    nextButtonId: 'huiyi-next-page',
    currentPageElementId: 'huiyi-current-page',
    totalPagesElementId: 'huiyi-total-pages',
    pageSizeSelectId: 'huiyi-page-size-select',
    statsElementId: 'huiyi-stats'
  });

  // 专著分页
  new PaginationManager(zhuanzhuData, 'zhuanzhu-list-container', {
    itemsPerPage: 5,
    prevButtonId: 'zhuanzhu-prev-page',
    nextButtonId: 'zhuanzhu-next-page',
    currentPageElementId: 'zhuanzhu-current-page',
    totalPagesElementId: 'zhuanzhu-total-pages',
    pageSizeSelectId: 'zhuanzhu-page-size-select',
    statsElementId: 'zhuanzhu-stats'
  });

  // 知识产权分页
  new PaginationManager(ipData, 'ip-list-container', {
    itemsPerPage: 5,
    prevButtonId: 'ip-prev-page',
    nextButtonId: 'ip-next-page',
    currentPageElementId: 'ip-current-page',
    totalPagesElementId: 'ip-total-pages',
    pageSizeSelectId: 'ip-page-size-select',
    statsElementId: 'ip-stats'
  });
});
