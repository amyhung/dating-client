import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Credentials } from "@auth/models";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "@core/models";
import { Observable, Subject } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromMembers from "@members/store/reducers";
import * as fromRoot from "@store/reducers";
import { map, takeUntil } from "rxjs/operators";
import validate = WebAssembly.validate;
import { MemberEditPageActions } from "@members/store/actions";

@Component({
  selector: 'app-member-edit-account',
  templateUrl: './member-edit-account.component.html',
  styleUrls: ['./member-edit-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberEditAccountComponent implements OnInit, OnDestroy {

  form: FormGroup;
  details: User;

  private destroy$ = new Subject<boolean>();

  constructor(private store: Store<fromMembers.State>, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [ '', Validators.required ],
      photoUrl: [ '', Validators.required ]
    });

    this.store.select(fromMembers.selectSelectedMember)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.details = data;
        this.patchForm(data);
      });

  }

  patchForm(user: User) {
    this.form.setValue({
      username: user.username,
      photoUrl: user.photoUrl
    })
  }

  getPhotoUrl() {
    return this.form.get('photoUrl').value;
  }

  onSubmit() {
    if (this.form.valid) {
      const user = { ...this.details, ...this.form.value };
      console.log(user);
      this.store.dispatch(MemberEditPageActions.editMember({ user }))
    }
  }

  required(control: string): boolean {
    return this.form.get(control).touched && this.form.get(control).invalid;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

}