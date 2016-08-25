import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import { Mongo } from 'meteor/mongo';
import { Parties }   from '../../../both/collections/parties.collection';
import { PartiesFormComponent } from './parties-form.component';
import template from './parties-list.component.html';
import {Party} from '../../../both/interfaces/party.interface';
import { MeteorComponent } from 'angular2-meteor';
import { PaginationService, PaginationControlsCmp } from 'ng2-pagination';
import { ReactiveVar } from 'meteor/reactive-var';
import { LoginButtons, InjectUser } from 'angular2-meteor-accounts-ui';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { RsvpPipe } from '../shared/rsvp.pipe';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';


@Component({
    selector: 'parties-list',
    template,
    viewProviders: [PaginationService],
    directives: [MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_INPUT_DIRECTIVES, GOOGLE_MAPS_DIRECTIVES, MdIcon, PartiesFormComponent, ROUTER_DIRECTIVES, PaginationControlsCmp],
    providers: [HTTP_PROVIDERS, MdIconRegistry],
    pipes: [RsvpPipe]
})
@InjectUser('user')
export class PartiesListComponent extends MeteorComponent implements OnInit {
    formShowing: boolean = false;
    icon: string = "add";
    parties: Mongo.Cursor<Party>;
    user: Meteor.User;
    location: ReactiveVar<string> = new ReactiveVar<string>(null);
    partiesSize: number = 0;
    pageSize: number = 5;
    currentPage: ReactiveVar<number> = new ReactiveVar<number>(1);
    optionOrder: ReactiveVar<number> = new ReactiveVar<number>(1);
    loading: boolean = false;
    values: string;

    constructor(private paginationService: PaginationService) {
        super();
    }
    ngOnInit() {
        this.paginationService.register({
            id: this.paginationService.defaultId,
            itemsPerPage: this.pageSize,
            currentPage: this.currentPage.get(),
            totalItems: this.partiesSize,
        });

        this.autorun(() => {
            const options = {
                limit: this.pageSize,
                skip: (this.currentPage.get() - 1) * this.pageSize,
                sort: { name: this.optionOrder.get() }
            }
            this.loading = true;
            this.paginationService.setCurrentPage(this.paginationService.defaultId, this.currentPage.get());
            this.subscribe('parties', options, this.location.get(), () => {
                this.parties = Parties.find({}, { sort: { name: this.optionOrder.get() } });
                this.loading = false;
            }, true);
        });
        this.autorun(() => {
            this.partiesSize = Counts.get('numberOfParties');
            console.log(this.partiesSize);
            this.paginationService.setTotalItems(this.paginationService.defaultId, this.partiesSize);
        });
    }

    removeParty(party) {
        Parties.remove(party._id);
    }
    showForm() {
        this.formShowing = !this.formShowing;
        this.icon = this.formShowing ? "remove" : "add";
    }
    onKey(event: any) {
        this.values = event.target.value;
        this.search(this.values);
    }
    search(value: string) {
        this.currentPage.set(1);
        this.location.set(value);
    }
    onPageChanged(page: number) {
        this.currentPage.set(page);
    }
    changeSortOrder(nameOrder: string) {
        this.optionOrder.set(parseInt(nameOrder));
    }
    isOwner(party: Party): boolean {
        return this.user && this.user._id === party.owner;
    }

}
