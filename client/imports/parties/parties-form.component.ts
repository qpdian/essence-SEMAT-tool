import { Component, OnInit } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import template from './parties-form.component.html';
import { Meteor } from 'meteor/meteor';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Parties } from '../../../both/collections/parties.collection';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { DragulaService, Dragula } from 'ng2-dragula/ng2-dragula';
@Component({
    selector: 'parties-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES, MdCheckbox, MD_INPUT_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_GRID_LIST_DIRECTIVES,Dragula],
    viewProviders: [DragulaService],
})
@InjectUser('user')
export class PartiesFormComponent extends MeteorComponent implements OnInit {
    user: Meteor.User;
    addForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        super();
    }
    ngOnInit() {
        this.addForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: [],
            location: ['', Validators.required],
            public: [false]
        });
    }
    resetForm() {
        this.addForm.controls['name']['updateValue']('');
        this.addForm.controls['description']['updateValue']('');
        this.addForm.controls['location']['updateValue']('');
        this.addForm.controls['public']['updateValue'](false);
    }


    addParty() {
        if (this.addForm.valid) {
            if (Meteor.userId()) {
                //Parties.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));
                Parties.insert({
                    name: this.addForm.value.name,
                    description: this.addForm.value.description,
                    location: {
                        name: this.addForm.value.location
                    },
                    public: this.addForm.value.public,
                    owner: Meteor.userId()
                });
                // XXX will be replaced by this.addForm.reset() in RC5+
                this.resetForm();
            } else {
                alert('Please log in to add a party');
            }

        }
    }


}
