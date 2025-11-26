import React from 'react';
import * as Icons from 'lucide-react';
import { FlowStep } from '../types';

interface StepCardProps {
  step: FlowStep;
  isLast: boolean;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, isLast, index }) => {
  const IconComponent = (Icons as any)[step.icon] || Icons.Circle;

  // Alternate animation delays for a cascading entrance effect
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      className="flex gap-4 md:gap-8 relative animate-fade-in-up"
      style={{ animationDelay, animationFillMode: 'both' }}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[28px] md:left-[36px] top-16 bottom-[-32px] w-1 bg-dnq-teal/30 rounded-full -z-10 dashed-line"></div>
      )}

      {/* Icon Bubble (3D Effect) */}
      <div className="relative flex-shrink-0 z-10">
        <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-dnq-teal to-dnq-dark rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center text-white border-2 border-white transform transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
          <IconComponent size={28} className="md:w-8 md:h-8" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-dnq-dark shadow-sm">
          {step.id}
        </div>
      </div>

      {/* Content Card (3D Effect) */}
      <div className="flex-1 pb-12">
        <div className={`
          relative bg-white rounded-2xl p-6 border-2 border-dnq-teal/20
          shadow-[6px_6px_0px_0px_rgba(47,142,142,0.15)]
          transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(47,142,142,0.25)] hover:-translate-y-1
          ${step.isDecision ? 'border-yellow-400/50 bg-yellow-50/30' : ''}
        `}>
          <h3 className="text-xl md:text-2xl font-bold text-dnq-dark mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {step.description}
          </p>
          
          {step.details && (
            <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dnq-teal font-medium">
                    <Icons.Check className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {step.isDecision && (
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-1/2 hidden lg:flex flex-col gap-2">
               <div className="bg-dnq-dark text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
                 เงื่อนไขสำคัญ
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
