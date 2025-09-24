import { UserInfo } from '../interfaces/personalInfo';
import { personalInfo } from './personal';
import { contactInfo } from './contact';
import { experienceEntries } from './experience';
import { educationEntries } from './education';

const info: UserInfo = {
  personal: personalInfo,
  journey: [...experienceEntries, ...educationEntries],
  contact: contactInfo,
};

export default info;
