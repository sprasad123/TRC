<?php
/**
* The below user class is defined in the project's root directory like so:
* myproject/profile/classes/user.php
*/
class user {
    protected $id;
    protected $firstname;
    protected $lastname;
    protected $email;
    protected $favoritecolor;
    protected $birthdate;
    protected $hobbies;
    private $password;

	function calculate_age() {
	/**
	* TODO: Assuming $birthdate is stored in unix time, use PHP DateTime() to return the user's age in
	years.
	*/
	    $birthday = new DateTime($birthdate);
	    $now = new DateTime();
	    $age = $now->diff($birthday);
	    echo $age -> y;
	}

	function get_hobbies() {
	    return $this->hobbies;
	}

	/**
	* TODO: Using the properties that have already been defined for
	 * this class, write a list of methods that could be useful in a read
	 * only profile page.
	*/

	function get_firstname() {
		return $this->firstname;
	}

	function get_lastname() {
		return $this->lastname;
	}

	function get_email() {
		return $this->email;
	}

	function get_favorite_color() {
		return $this->favoritecolor;
	}

	function get_birthdate() {
		return $this->birthdate;
	}

}

?>