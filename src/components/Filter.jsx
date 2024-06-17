import React from "react"
import { FilterPart, FilterField } from "styled/styled-filter";
import { useSelector } from "react-redux";
// import { filterContact } from "../redux/contactsSlice";

export const Filter = () => {

    // const dispatch = useDispatch();
    const filter = useSelector((state) => state.contacts.filter);

    const handleChange = (e) => {
        // dispatch(filterContact(e.target.value));
      };

    return <FilterPart>
    <label className="label" htmlFor="filter">Find contacts by name</label>
    <FilterField id="filter" value={filter} onChange={handleChange} type="text"/>
    </FilterPart>
}
