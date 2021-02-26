import React, { Component } from 'react';
import UserCard from './UserCard';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
        }
    }
    
    _loadData = async () => {
        const data = await fetch('https://randomuser.me/api/?results=10').then(response => response.json());
        return data;
    }

    async componentDidMount() {
        const apiData = await this._loadData();
        this.setState({
            userData: apiData.results,
        })
    }

    render() {
        const { userData } = this.state;
        return (
            <ul>
                {userData.length ? (
                    userData.map((user, index) => {
                        return <UserCard user={user} key={`${user.name.first}-${index}}`}/>
                    })
                ) : (
                    <p>Loading User Data</p>
                )}
            </ul>
        );
    }
}

export default UserList;