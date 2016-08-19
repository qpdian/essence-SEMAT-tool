import { Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Parties } from '../../../both/collections/parties.collection';
import {Party} from '../../../both/interfaces/party.interface';
import { MeteorComponent } from 'angular2-meteor';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { DisplayNamePipe } from '../shared/display-name.pipe';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { GOOGLE_MAPS_DIRECTIVES, MouseEvent } from 'angular2-google-maps/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import template from './party-details.component.html';


@Component({
    selector: 'party-details',
    template,
    directives: [ROUTER_DIRECTIVES, GOOGLE_MAPS_DIRECTIVES,
                 MD_INPUT_DIRECTIVES, MD_CHECKBOX_DIRECTIVES,
                 MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES,
                 MD_LIST_DIRECTIVES ,MdIcon],
      providers: [HTTP_PROVIDERS, MdIconRegistry],
    pipes: [DisplayNamePipe]
})
@InjectUser('user')
export class PartyDetailsComponent extends MeteorComponent implements OnInit {
    partyId: string;
    party: Party;
    users: Mongo.Cursor<any>;
    user: Meteor.User;
    // Default center Palo Alto coordinates.
    centerLat: number = 37.4292;
    centerLng: number = -122.1381;
    constructor(private route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.route.params
            .map(params => params['partyId'])
            .subscribe(partyId => {
                this.partyId = partyId;
                this.subscribe('party', this.partyId, () => {
                    this.autorun(() => {
                        this.party = Parties.findOne(this.partyId);
                        this.getUsers(this.party);
                    }, true);
                }, true);
                this.subscribe('uninvited', this.partyId, () => {
                    this.getUsers(this.party);
                }, true);
            });
    }
    getUsers(party: Party) {
        if (party) {
            this.users = Meteor.users.find({
                _id: {
                    $nin: party.invited || [],
                    $ne: Meteor.userId()
                }
            });
        }
    }
    saveParty() {
        if (Meteor.userId()) {
            Parties.update(this.party._id, {
                $set: {
                    name: this.party.name,
                    description: this.party.description,
                    location: this.party.location
                }
            });
        } else {
            alert('Please log in to change this party');
        }
    }
    get isOwner(): boolean {
        return this.party && this.user && this.user._id === this.party.owner;
    }
    get isPublic(): boolean {
        return this.party && this.party.public;
    }

    get isInvited(): boolean {
        if (this.party && this.user) {
            const invited = this.party.invited || [];
            return invited.indexOf(this.user._id) !== -1;
        }

        return false;
    }
    invite(user: Meteor.User) {
        this.call('invite', this.party._id, user._id, (error) => {
            if (error) {
                alert(`Failed to invite due to ${error}`);
                return;
            }

            alert('User successfully invited.');
        });
    }
    reply(rsvp: string) {
        this.call('reply', this.party._id, rsvp, (error) => {
            if (error) {
                alert(`Failed to reply due to ${error}`);
            } else {
                alert('You successfully replied.');
            }
        });
    }
    get lat(): number {
        return this.party && this.party.location.lat;
    }

    get lng(): number {
        return this.party && this.party.location.lng;
    }

    mapClicked($event: MouseEvent) {
        this.party.location.lat = $event.coords.lat;
        this.party.location.lng = $event.coords.lng;
    }

}
