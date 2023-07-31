import utils from '@helpers/utils'
import http from '@helpers/http'
import {
  Banner,
  Category,
  City,
  Merchant,
  MyOutlet,
  PriceRange,
  Profession,
  Useraccount,
} from '@interface'

const apiVersion = utils.apiVersion
const api = {
  me() {
    return utils.apiHandler<Useraccount>(http.get(`api/${apiVersion}/auth/me`))
  },
  myOutlet() {
    return utils.apiHandler<MyOutlet[]>(http.get(`api/${apiVersion}/outlet/my`))
  },
  cities() {
    return utils.apiHandler<City[]>(http.get(`api/${apiVersion}/cities`))
  },
  categories() {
    return utils.apiHandler<Category[]>(
      http.get(`api/${apiVersion}/categories`)
    )
  },
  professions() {
    return utils.apiHandler<Profession[]>(
      http.get(`api/${apiVersion}/profession`)
    )
  },
  businessModel() {
    return utils.apiHandler<Profession[]>(
      http.get(`api/${apiVersion}/business-models`)
    )
  },
  merchantType() {
    return utils.apiHandler<Profession[]>(
      http.get(`api/${apiVersion}/merchant-types`)
    )
  },
  priceRange() {
    return utils.apiHandler<PriceRange[]>(
      http.get(`api/${apiVersion}/price-range`)
    )
  },
  promotionBanner() {
    return utils.apiHandler<Banner[]>(
      http.get(`api/${apiVersion}/promotion-banners`)
    )
  },
  verifiedMerchants() {
    return utils.apiHandler<Merchant[]>(
      http.get(`api/${apiVersion}/merchants/verified/items?size=20&page=1`)
    )
  },
  recomendationsMerchants() {
    return utils.apiHandler<Merchant[]>(
      http.get(`api/${apiVersion}/merchants/recomended/items?size=20&page=1`)
    )
  },
  flashSales() {
    return utils.apiHandler<Merchant[]>(
      http.get(`api/${apiVersion}/flash-sale?size=20&page=1`)
    )
  },
  merchants() {
    return utils.apiHandler<Merchant[]>(http.get(`api/${apiVersion}/merchants`))
  },
}

export default api
