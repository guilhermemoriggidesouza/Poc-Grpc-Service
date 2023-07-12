import Redis from 'ioredis'

export default class GeoFac {
    redis: Redis;
    constructor() {
        this.redis = new Redis(6379);
    }

    async addLocation(city: string, id: string, lat: number, long: number) {
        this.redis.geoadd(city, lat, long, id)
    }

    async nearby(city: string, lat: number, long: number, radius: number) {
        return await this.redis.geosearch(city, "FROMLONLAT", lat, long, "BYRADIUS", radius, "m", "ASC")

    }
} 