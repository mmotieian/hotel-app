import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ReservationService} from '../reservation/reservation.service';
import {Reservation} from "../models/reservation";


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});


  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      this.ReservationService.createReservation(reservation);
    }
  }

  constructor(private formBuilder: FormBuilder, private ReservationService: ReservationService) {

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    });

    // localStorage.setItem('reservations', JSON.stringify(this.ReservationService.getReservations()));
  }

}
