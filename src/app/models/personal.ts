import {ITreatment} from './treatment';

export interface IPersonal {
    firstname: String;
    lastname: String;
    birth_date : Date;
    weight : Number;
    blood_group : String;
    treatments?: Array<{ITreatment}> ;
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