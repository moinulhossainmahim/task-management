import { Injectable } from '@nestjs/common';
import { Contact } from './contact.model';
import { CreateContactDto } from './dto/create-contact.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ContactsService {
  contacts: Contact[] = [];

  createContact(createContactDto: CreateContactDto): Contact {
    const {
      firstName,
      lastName,
      nickName,
      title,
      phone,
      email,
      address,
      significantDate,
      relatedPerson,
      relationShip,
      customField
    } = createContactDto;

    const contact = {
      id: uuid(),
      firstName,
      lastName,
      nickName,
      title,
      phone,
      email,
      address,
      significantDate,
      relatedPerson,
      relationShip,
      customField
    }
    this.contacts.push(contact);
    return contact;
  }
}
