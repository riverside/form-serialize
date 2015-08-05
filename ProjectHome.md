# Introduction #
When you can't use (or don't want) javascript libraries like **jQuery**, **Moo Tools**, **Dojo**, **YUI** or **Prototype**, and their built-in functions, but still need a quick and easy way to serialize forms.



# Usage #
Include (or [download](http://code.google.com/p/form-serialize/downloads/list))
```
<script type="text/javascript" src="http://form-serialize.googlecode.com/svn/trunk/serialize-0.2.min.js"></script>
```

Example of HTML form:
```
<form action="" method="get">
	<input type="hidden" name="id" value="32" />
	<input type="text" name="fullname" value="Dimitar Ivanov" />
	<input type="password" name="password" value="Krazie Bone" />
	<input type="text" name="email" value="mailbox@domain.com" />
	<input type="file" name="attachment" />
	<select name="gender">
		<option value="male" selected="selected">Male</option>
		<option value="female">Female</option>
	</select>
	<select name="job[]" multiple="multiple" size="6">
		<option value="java_dev">Java developer</option>
		<option value="web_dev" selected="selected">Web Developer</option>
		<option value="ui_engineer" selected="selected">UI Engineer</option>
		<option value="db_admin">DB Administrator</option>
		<option value="senior_php" selected="selected">Senior PHP programmer</option>
		<option value="sap_engineer">SAP Engineer</option>
	</select>
	<input type="radio" name="wish" value="yes" />
	<input type="radio" name="wish" value="no" checked="checked" />
	<input type="checkbox" name="sport[]" id="basketball" value="basketball" checked="checked" />
	<input type="checkbox" name="sport[]" id="football" value="football" checked="checked" />
	<input type="checkbox" name="sport[]" id="volleyball" value="volleyball" />
	<input type="checkbox" name="sport[]" id="ice_hockey" value="ice_hockey" checked="checked" />
	<input type="checkbox" name="sport[]" id="baseball" value="baseball" />
	<textarea name="info">Form serialize in
pure javascript</textarea>
	<input type="checkbox" name="agree" value="T" checked="checked" />
	<input type="button" value="Serialize form" id="btnSerialize" />
</form>
```

Form serialize call:
```
<script type="text/javascript">
window.onload = function () {
    document.getElementById("btnSerialize").onclick = function () {
        alert(serialize(document.forms[0]));
    };
};
</script>
```

# Demo #
[View demo](http://www.bulgaria-web-developers.com/projects/javascript/serialize/)