export interface FlowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  details?: string[];
  isDecision?: boolean;
  subSteps?: FlowStep[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}
