import { CustomError } from './CustomError'

type ShopifyError = {
  field: string;
  message: string;
}

export class StorefrontApiError extends CustomError {
  statusCode = 400

  constructor(public errors: ShopifyError[]) {
    super('Invalid request parameters')

    Object.setPrototypeOf(this, StorefrontApiError.prototype)
  }

  serializeErrors() {
    return this.errors.map((error) => {
      return { message: error.message, field: error.field }
    })
  }
}