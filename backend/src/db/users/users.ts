import { connection } from "../connection";

import {
  selectCountOfUsersTemplate,
  selectUsersTemplate,
} from "./query-templates";
import { User } from "./types";

export const getUsersCount = (): Promise<number> =>
	new Promise((resolve, reject) => {
		connection.get<{ count: number }>(selectCountOfUsersTemplate, (error, results) => {
			if (error) {
				reject(error);
			}
			resolve(results.count);
		});
	});
export const getUsers = (
  pageNumber: number,
  pageSize: number
): Promise<User[]> =>
  new Promise((resolve, reject) => {
    connection.all<User>(
      selectUsersTemplate,
      [pageNumber * pageSize, pageSize],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        const formattedResults = results.map((user) => {
			const formattedUser: User = {
				id: user.id,
				name: user.name,
				email: user.email,
				username: user.username,
				phone: user.phone,
				address: formatAddress(user),
			};
			return formattedUser;
		});
		resolve(formattedResults);
      }
    );
  });
const formatAddress = (user: any) => {
	const address = {
		street: user.street || "",
		city: user.city || "",
		zipcode: user.zipcode || "",
		state: user.state || "",
	};
	if (!address.street || !address.city || !address.zipcode) {
		throw new Error("Address fields are incomplete");
	}
	const fullAddress = `${address.street}, ${address.city}, ${address.state}, ${address.zipcode}`;
	return fullAddress;
};