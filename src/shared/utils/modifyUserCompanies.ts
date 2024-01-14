import { ExpectedLoginReturn } from "@features/auth/typesAndData";

export function modifyUserCompanyList(companyList: ExpectedLoginReturn['user_companies']){
    if(!companyList) return false;
    else if(Array.isArray(companyList.allowed_companies)){
        return companyList.allowed_companies.map((x) => ({
            id: x[0],
            name: x[1],
          }))
    }
    return Object.values(companyList.allowed_companies).map((company: {id:number, name:string}) => company);
}