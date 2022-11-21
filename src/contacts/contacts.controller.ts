import { Body, Controller, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) {}

    @Post()
    createContact(@Body() createContactDto: CreateContactDto) {
        return this.contactsService.createContact(createContactDto);
    }
}
