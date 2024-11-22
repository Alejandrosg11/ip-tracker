export interface Location {
    region: string;
    country: string;
    timezone: string;
    lat: number;
    lng: number;
    city?: string;
    postalCode?: string;
}
  
export interface IpData {
    ip: string;
    location: Location;
    isp: string;
}
  
export interface UserProps {
    className?: string;
    ipData?: IpData | null;
}

export interface MapComponentProps {
    lat: number;
    lng: number;
}