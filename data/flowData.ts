import { FlowStep } from '../types';

export const flowData: FlowStep[] = [
  {
    id: 1,
    title: "เข้าถึงและเข้ารับบริการ",
    description: "ผู้ป่วยกลุ่มเป้าหมาย / ญาติต้องการการดูแลต่อเนื่องที่บ้าน",
    icon: "UserPlus",
    details: ["ติดต่อผ่านช่องทางบริการ", "แจ้งความประสงค์"]
  },
  {
    id: 2,
    title: "แจ้ง Care Manager",
    description: "ส่งต่อข้อมูลให้ผู้จัดการการดูแล",
    icon: "PhoneCall",
  },
  {
    id: 3,
    title: "ประเมินผู้ป่วย",
    description: "Care Manager ประเมินผู้ป่วยตามแบบ Patient / Family Assessment",
    icon: "ClipboardCheck",
    details: ["ประเมินสุขภาพร่างกาย", "ประเมินสภาพจิตใจ", "ประเมินสภาพแวดล้อมที่บ้าน"]
  },
  {
    id: 4,
    title: "เสนอ Package & ราคา",
    description: "นำเสนอแผนการดูแลและค่าใช้จ่ายที่เหมาะสม",
    icon: "Tag",
  },
  {
    id: 5,
    title: "ยืนยันรับบริการ",
    description: "ญาติตัดสินใจ ตกลงรับบริการ กำหนดเวลาเริ่มและระยะเวลา",
    icon: "CheckCircle2",
    isDecision: true,
    details: ["เซ็นสัญญา", "กำหนดวันเริ่มงาน"]
  },
  {
    id: 6,
    title: "เตรียมทีมและชำระเงิน",
    description: "เตรียม Staff Profile และชำระค่าใช้จ่ายล่วงหน้า",
    icon: "CreditCard",
    details: ["เตรียมข้อมูลผู้ดูแล (Staff Profile)", "ชำระเงินผ่านบัญชี BQH", "ออกใบเสร็จรับเงิน"]
  },
  {
    id: 7,
    title: "วางแผนและเริ่มงาน",
    description: "ส่งต่อข้อมูล แผนการดูแล และจัดตารางงาน Care Giver",
    icon: "CalendarClock",
    details: ["Care Manager ส่งแผนการดูแล", "บริหารอัตรากำลัง", "เริ่มให้บริการตามแผน"]
  },
  {
    id: 8,
    title: "บันทึกและเฝ้าระวัง",
    description: "ดูแล เฝ้าระวัง ประเมินซ้ำ และรายงานผล",
    icon: "Activity",
    details: ["บันทึกการดูแลรายวัน", "รายงาน Care Manager เมื่อมีปัญหา", "ขอความช่วยเหลือทันทีเมื่อฉุกเฉิน"]
  },
  {
    id: 9,
    title: "ประเมินผลและต่อสัญญา",
    description: "บริหารความสัมพันธ์ ประเมินความพึงพอใจ รับฟัง Feedback",
    icon: "HeartHandshake",
    isDecision: true,
    details: ["สรุปผลการดูแล", "ต่อสัญญา (ชำระเงินเพิ่ม)", "สิ้นสุดบริการ"]
  }
];
