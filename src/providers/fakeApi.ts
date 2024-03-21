import { Result } from '@/core/Result';

import axios, { AxiosError } from 'axios';
import {
  InternalException,
  UnauthorizedException,
  ValidationException,
} from '@/core/Exceptions/ExceptionCodes';
import { NotFoundException } from '@/core/Exceptions/ExceptionCodes';
import Cookies from 'js-cookie';

const fakeApiUrl =
  'http://cursos-beta-4pb36vkor-johannes-projects-6f05f567.vercel.app/api';

export class fakeApiProvider {
  private readonly base_url: string;
  constructor() {
    this.base_url = fakeApiUrl || '';
  }

  async request(
    method: string,
    url: string,
    data?: any,
    token?: string
  ): Promise<Result<any>> {
    if (!data) data = {};

    if (!token) token = (await Cookies.get('token')) || undefined;

    let result;
    switch (method) {
      case 'GET':
        result = await axios
          .get(`${url}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            baseURL: this.base_url,
          })
          .then((res) => {
            return Result.ok(res.data);
          })
          .catch((err) => {
            return Result.fail(
              new NotFoundException(err.response.data.message)
            );
          });
        break;
      case 'POST':
        result = axios
          .post(`${url}`, data, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            baseURL: this.base_url,
          })
          .then((res) => {
            return Result.ok(res.data);
          })
          .catch((err) => {
            return this.errorHandle(err);
          });
        break;
      case 'PUT':
        result = await axios
          .put(`${url}`, data, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            baseURL: this.base_url,
          })
          .then((res) => {
            return Result.ok(res.data);
          })
          .catch((err) => {
            return Result.fail(err);
          });
        break;
      case 'PATCH':
        result = await axios
          .patch(`${url}`, data, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            baseURL: this.base_url,
          })
          .then((res) => {
            return Result.ok(res.data);
          })
          .catch((err) => {
            return Result.fail(err);
          });
        break;
      case 'UnloggedPATCH':
        result = await axios
          .patch(`${url}`, data, {
            headers: {
              'Content-Type': 'application/json',
            },
            baseURL: this.base_url,
          })
          .then((res) => {
            return Result.ok(res.data);
          })
          .catch((err) => {
            return this.errorHandle(err);
          });
        break;
      default:
        return Result.fail(
          new InternalException(new Error('Method not found'))
        );
    }

    return result;
  }

  private errorHandle(error: AxiosError) {
    switch (error.response!.status) {
      case 400:
        return Result.fail(
          new ValidationException(error.response?.data as string)
        );
      case 401:
        return Result.fail(
          new UnauthorizedException(error.response?.data as string)
        );
      case 404:
        return Result.fail(
          new NotFoundException(error.response?.data as string)
        );
      case 500:
        return Result.fail(
          new InternalException(new Error(error.response?.data as string))
        );
      default:
        return Result.fail(
          new InternalException(new Error(error.response?.data as string))
        );
    }
  }
}
