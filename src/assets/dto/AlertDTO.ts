export interface AlertReason {
  name: string;
  description: string;
  address: string;
  warnType: string;
}

export interface AlertDTO {
  reasonsList: AlertReason[];
}

export const alertMock: AlertDTO = {
  reasonsList: [
    {
      name: "Gabriel Melo",
      description: "ALAGAMENTO PESADO AFONSO PENA",
      address: "afonso pena",
      warnType: "FLOODING"
    },
    {
      name: "tirulipa",
      description: "ALAGAMENTO PESADO AFONSO PENA",
      address: "afonso pena",
      warnType: "FLOODING"
    },
    {
      name: "Gabriel",
      description: "ALAGAMENTO PESADO AFONSO PENA",
      address: "afonso pena",
      warnType: "FLOODING"
    },
    {
      name: "Gabriel",
      description: "Pedras muito trandes na barões",
      address: "baroes",
      warnType: "HAILI"
    },
    {
      name: "Gabriel",
      description: "Pedras muito trandes na barões",
      address: "baroes",
      warnType: "HAILI"
    },
    {
      name: "Gabriel",
      description: "Pedras muito trandes na barões",
      address: "baroes",
      warnType: "HAILI"
    }
  ]
}; 