import React from "react";
import { persons } from "./file2";

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person={persons[0]} />
        <WelcomePerson person={persons[1]} />
        <WelcomePerson person={persons[2]} />
        {persons.map((person)=><WelcomePerson key={person.email} person={person} />)}
      </div>
    );
}

export function WelcomePerson(props) {
    const {firstName, lastName, email} = props.person
    return <h1>Hello, {firstName} {lastName} we will contact you at {email}</h1>;
}
