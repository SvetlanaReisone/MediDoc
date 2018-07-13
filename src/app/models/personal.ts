import {Treatment} from './treatment';

export class Personal {
    user_id: string;
    person_id : Number;
    firstname: String;
    lastname: String;
    date_birth? : String;
    weight? : Number;
    blood_group? : String;
    treatments?: Array<{Treatment}> ;
    allergies?: Array<{allergen: String}> ;
    appareils?: Array<{appareil: String}> ;
    doctor?:{
              fullname: String;
              phone: String;
            }
    contacts?: Array<{
                  contact_name: String;
                  contacts_phone: String;
               }>
}