import {
  ResumeDefaultTemplate,
  ResumeCleanTemplate,
  ResumeNavyBlueSidebarTemplate,
  ResumePurpleStripeTemplate,
  ResumeClassicAccountingTemplate,
  ResumeMinimalistCustomerServiceTemplate,
  ResumeModernITSpecialistTemplate,
} from "../pages/resumes/templates";

const templateMapper = {
  "resume-default-template": ResumeDefaultTemplate,
  "resume-clean-template": ResumeCleanTemplate,
  "resume-purple-stripe-template": ResumePurpleStripeTemplate,
  "resume-navy-blue-sidebar-template": ResumeNavyBlueSidebarTemplate,
  "resume-classic-accounting-template": ResumeClassicAccountingTemplate,
  "resume-minimalist-customer-service-template":
    ResumeMinimalistCustomerServiceTemplate,
  "resume-modern-it-specialist-template": ResumeModernITSpecialistTemplate,
};

export default templateMapper;
