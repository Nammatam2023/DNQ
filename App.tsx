import React from 'react';
import Header from './components/Header';
import StepCard from './components/StepCard';
import ChatWidget from './components/ChatWidget';
import { flowData } from './data/flowData';
import { ArrowDown, Info } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-800 pb-24">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Intro Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dnq-dark mb-4">
            ขั้นตอนการเข้ารับบริการ
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            เข้าถึงและเข้าใจบริการ Home Ward ได้ง่ายๆ ทีละขั้นตอน เพื่อการดูแลต่อเนื่องที่บ้านอย่างมีประสิทธิภาพ
          </p>
        </div>

        {/* Vertical Flow */}
        <div className="relative">
          {flowData.map((step, index) => (
            <StepCard 
              key={step.id} 
              step={step} 
              index={index}
              isLast={index === flowData.length - 1} 
            />
          ))}
        </div>

        {/* End of Flow Note */}
        <div className="mt-8 flex flex-col items-center justify-center text-center gap-4 animate-fade-in-up delay-1000">
          <div className="w-1 h-16 bg-gradient-to-b from-dnq-teal/30 to-transparent dashed-line"></div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-dnq-dark max-w-md w-full relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
               <ArrowDown size={100} />
             </div>
             <h3 className="text-lg font-bold text-dnq-dark mb-2">สิ้นสุดบริการ หรือ ต่อสัญญา</h3>
             <p className="text-sm text-gray-500 mb-4">
               เมื่อครบกำหนดสัญญา ท่านสามารถเลือกที่จะยุติบริการหรือชำระเงินเพื่อต่อสัญญาการดูแลได้ทันที
             </p>
             <div className="flex gap-2 justify-center">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-medium rounded-lg transition-colors">
                  จบการบริการ
                </button>
                <button className="px-4 py-2 bg-dnq-teal text-white text-sm font-medium rounded-lg shadow-md hover:bg-dnq-dark transition-colors">
                  ต่อสัญญาบริการ
                </button>
             </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs text-gray-400 bg-gray-100 px-4 py-2 rounded-full">
            <Info size={14} />
            <span>กรณีต้องการเช่าอุปกรณ์เพียงอย่างเดียว โปรดติดต่อเจ้าหน้าที่โดยตรง</span>
          </div>
        </div>
      </main>

      <ChatWidget />
      
      {/* Footer Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-dnq-dark via-dnq-teal to-dnq-light z-50"></div>
      
      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0; 
        }
        .dashed-line {
          background-image: linear-gradient(to bottom, currentColor 50%, transparent 50%);
          background-size: 1px 12px;
          background-repeat: repeat-y;
        }
      `}</style>
    </div>
  );
};

export default App;
