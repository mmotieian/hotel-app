import {Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  // CRUD
  // Get all reservations
  getReservations(): Reservation[] {
    let localStorageItem = JSON.parse(localStorage.getItem('reservations')!);
    return localStorageItem == null ? [] : localStorageItem;
  }

  // Get a reservation by id
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  // Create a new reservation
  createReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  // Delete a reservation by id
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  // Update a reservation by id
  updateReservation(id: string, reservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations[index] = reservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

}
