export const VehicleNames = [
  { id: 1, name: "Car/Jeep/Van" },
  { id: 2, name: "LCV" },
  { id: 3, name: "Truck/Bus" },
  { id: 4, name: "Heavy vehicle" },
];

export const TollNames = [
  { id: 1, name: "Salem" },
  { id: 2, name: "Omallur" },
  { id: 3, name: "Kappalur" },
  { id: 4, name: "Krishnagiri" },
  { id: 5, name: "Sengurichi" },
];

export const AddVehicleState = {
  vehicleType: "",
  vehicleNumber: "",
  tollName: "",
  tariff: 0,
};

export const AddTollState = {
  tollName: "",
  tollType_one: "",
  singleJourney_one: "",
  returnJourney_one: "",
  tollType_two: "",
  singleJourney_two: "",
  returnJourney_two: "",
  tollType_three: "",
  singleJourney_three: "",
  returnJourney_three: "",
  tollType_four: "",
  singleJourney_four: "",
  returnJourney_four: "",
};

export const PopupHandle = {
  isVehiclePopup: false,
  isTollPopup: false,
};
