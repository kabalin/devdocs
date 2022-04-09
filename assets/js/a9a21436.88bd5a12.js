"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7103],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2490:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={title:"Access API",tags:["Access"]},s=void 0,c={unversionedId:"apiguides/access",id:"apiguides/access",title:"Access API",description:"The Access API gives you functions so you can determine what the current user is allowed to do. It also allows plugins to extend Moodle with new capabilities.",source:"@site/docs/apiguides/access.md",sourceDirName:"apiguides",slug:"/apiguides/access",permalink:"/dinodevdocs/docs/apiguides/access",editUrl:"https://github.com/andrewnicols/dinodevdocs/edit/main/docs/apiguides/access.md",tags:[{label:"Access",permalink:"/dinodevdocs/docs/tags/access"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1649482268,formattedLastUpdatedAt:"09/04/2022",frontMatter:{title:"Access API",tags:["Access"]},sidebar:"docs",previous:{title:"API Guides",permalink:"/dinodevdocs/docs/apiguides"},next:{title:"Moodle Development Kit",permalink:"/dinodevdocs/docs/tools/mdk"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"How to define new capabilities in plugins",id:"how-to-define-new-capabilities-in-plugins",level:2},{value:"Useful functions and classes",id:"useful-functions-and-classes",level:2},{value:"Context fetching",id:"context-fetching",level:3},{value:"Determining that a user has a given capability",id:"determining-that-a-user-has-a-given-capability",level:3},{value:"has_capability()",id:"has_capability",level:4},{value:"require_capability()",id:"require_capability",level:4},{value:"Enrolment functions",id:"enrolment-functions",level:3},{value:"Other related functions",id:"other-related-functions",level:3},{value:"<code>require_login()</code>",id:"require_login",level:4},{value:"<code>require_course_login()</code>",id:"require_course_login",level:4},{value:"<code>isguestuser()</code>, <code>isloggedin()</code> and <code>is_siteadmin()</code>",id:"isguestuser-isloggedin-and-is_siteadmin",level:4},{value:"<code>is_guest()</code>, <code>is_viewing()</code> and <code>is_enrolled()</code>",id:"is_guest-is_viewing-and-is_enrolled",level:4},{value:"<code>get_users_by_capability()</code>",id:"get_users_by_capability",level:4},{value:"See also",id:"see-also",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Access API gives you functions so you can determine what the current user is allowed to do. It also allows plugins to extend Moodle with new capabilities."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Moodle uses a role-based access control model. Entities are represented by contexts which are arranged into a tree-like hierarchy known as the context tree."),(0,l.kt)("p",null,"The following context types are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Context name"),(0,l.kt)("th",{parentName:"tr",align:null},"Represents"),(0,l.kt)("th",{parentName:"tr",align:null},"Immediate contents"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context_system")),(0,l.kt)("td",{parentName:"tr",align:null},"The site as a whole"),(0,l.kt)("td",{parentName:"tr",align:null},"user, course category, module, and block"),(0,l.kt)("td",{parentName:"tr",align:null},"The System context is root context in the tree. There is only one System context")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context_user")),(0,l.kt)("td",{parentName:"tr",align:null},"An individual user"),(0,l.kt)("td",{parentName:"tr",align:null},"block"),(0,l.kt)("td",{parentName:"tr",align:null},"Each user has their own, unique, context")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context_coursecat")),(0,l.kt)("td",{parentName:"tr",align:null},"A single course category"),(0,l.kt)("td",{parentName:"tr",align:null},"course category, course, block"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context_course")),(0,l.kt)("td",{parentName:"tr",align:null},"A single course"),(0,l.kt)("td",{parentName:"tr",align:null},"module, block"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context_module")),(0,l.kt)("td",{parentName:"tr",align:null},"An activity"),(0,l.kt)("td",{parentName:"tr",align:null},"block"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context_block")),(0,l.kt)("td",{parentName:"tr",align:null},"A block"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"A Role is a set of capability definitions, where each capability represents something that the user is able to do. Roles are defined at the top most\ncontext in the context tree, the System context."),(0,l.kt)("p",null,"Roles can be overridden by contexts further down the tree."),(0,l.kt)("p",null,"User access is calculated from the combination of roles which are assigned to each user."),(0,l.kt)("p",null,"All users that did not log-in yet automatically get the default role defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"$CFG->notloggedinroleid"),", it is not possible to assign any other role to this non-existent user id. There is one special guest user account that is used when user logs in using the guest login button or when guest autologin is enabled. Again you can not assign any roles to the guest account directly, this account gets the ",(0,l.kt)("inlineCode",{parentName:"p"},"$CFG->guestroleid")," automatically. All other authenticated users get the default user role specified in ",(0,l.kt)("inlineCode",{parentName:"p"},"$CFG->defaultuserroleid")," and in the frontpage context the role specified in ",(0,l.kt)("inlineCode",{parentName:"p"},"$CFG->defaultfrontpageroleid"),"."),(0,l.kt)("h2",{id:"how-to-define-new-capabilities-in-plugins"},"How to define new capabilities in plugins"),(0,l.kt)("p",null,"Capabilities are defined by ",(0,l.kt)("inlineCode",{parentName:"p"},"$capabilities")," array defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"db/access.php")," files. The name of the capability consists of ",(0,l.kt)("inlineCode",{parentName:"p"},"plugintype/pluginname:capabilityname"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/folder/db/access.php"',title:'"mod/folder/db/access.php"'},"$capabilities = [\n    'mod/folder:managefiles' => [\n        'riskbitmask' => RISK_SPAM,\n        'captype' => 'write',\n        'contextlevel' => CONTEXT_MODULE,\n        'archetypes' => [\n            'editingteacher' => CAP_ALLOW,\n        ],\n    ],\n];\n")),(0,l.kt)("p",null,"Where the meaning of array keys is:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"riskbitmask")),(0,l.kt)("td",{parentName:"tr",align:null},"associated risks. These are explained on ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Hardening_new_Roles_system"},"Hardening new Roles system"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"captype")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"read")," or ",(0,l.kt)("em",{parentName:"td"},"write")," capability type, for security reasons system prevents all write capabilities for guest account and not-logged-in users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"contextlevel")),(0,l.kt)("td",{parentName:"tr",align:null},"specified as context level constant. Declares the typical context level where this capability is checked. This capability can be checked with contexts that are at a lower level (e.g. 'moodle/site:accessallgroups'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"archetypes")),(0,l.kt)("td",{parentName:"tr",align:null},"specifies defaults for roles with standard archetypes, this is used in installs, upgrades and when resetting roles (it is recommended to use only CAP_ALLOW here).  Archetypes are defined in mdl_role table.  See also ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Role_archetypes"},"Role archetypes"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clonepermissionsfrom")),(0,l.kt)("td",{parentName:"tr",align:null},"when you are adding a new capability, you can tell Moodle to copy the permissions for each role from the current settings for another capabilty. This may give better defaults than just using archetypes for administrators who have heavily customised their roles configuration. The full syntax is: ",(0,l.kt)("tt",null,"'clonepermissionsfrom' => 'moodle/quiz:attempt',"))))),(0,l.kt)("p",null,"It is necessary to bump up plugin version number after any change in db/access.php, so that the upgrade scripts can make the necessary changes to the database.  To run the upgrade scripts, log in to Moodle as administrator, navigate to the site home page, and follow the instructions.  (If you need to test the upgrade script without changing the plugin version, it is also possible to set back the version number in the mdl_block or mdl_modules table in the database.)"),(0,l.kt)("p",null,'The capability names are defined in plugin language files, the name of the string consists of "pluginname:capabilityname", in the example above it would be:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/folder/lang/en/folder.php"',title:'"mod/folder/lang/en/folder.php"'},"$string['folder:managefiles'] = 'Manage files in folder module';\n")),(0,l.kt)("h2",{id:"useful-functions-and-classes"},"Useful functions and classes"),(0,l.kt)("h3",{id:"context-fetching"},"Context fetching"),(0,l.kt)("p",null,"In plugins context instances are usually only instantiated because they are instantiated and deleted automatically by the system."),(0,l.kt)("p",null,"Fetching by object id:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$systemcontext = context_system::instance();\n$usercontext = context_user::instance($user->id);\n$categorycontext = context_coursecat::instance($category->id);\n$coursecontext = context_course::instance($course->id);\n$contextmodule = context_module::instance($cm->id);\n$contextblock = context_block::instance($this->instance->id);\n")),(0,l.kt)("p",null,"Fetching by context id:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$context = context::instance_by_id($contextid);\n")),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"by default exception is thrown if context can not be created"),(0,l.kt)("li",{parentName:"ul"},"deleted users do not have contexts any more")),(0,l.kt)("h3",{id:"determining-that-a-user-has-a-given-capability"},"Determining that a user has a given capability"),(0,l.kt)("p",null,'When implementing access control always ask "Does the user have capability to do something?". It is incorrect to ask "Does the user have a role somewhere?".'),(0,l.kt)("h4",{id:"has_capability"},"has_capability()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"has_capability()")," is the most important function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"function has_capability(\n    string $capability,\n    context $context,\n    object $user = null,\n    bool $doanything = true\n): bool;\n")),(0,l.kt)("p",null,"Check whether a user has a particular capability in a given context. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$context = context_module::instance($cm->id);\nif (has_capability('mod/folder:managefiles', $context)) {\n    // Do or display something.\n}\n")),(0,l.kt)("p",null,"By default checks the capabilities of the current user, but you can pass a different userid. By default will return true for admin users, it is not recommended to use false here."),(0,l.kt)("h4",{id:"require_capability"},"require_capability()"),(0,l.kt)("p",null,"Function require_capability() is very similar, it is throwing access control exception if user does not have the capability."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"function require_capability($capability, context $context, $userid = null, $doanything = true, $errormessage = 'nopermissions', $stringfile = _) {\n")),(0,l.kt)("h3",{id:"enrolment-functions"},"Enrolment functions"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Enrolment_API"},"Enrolment API"),"."),(0,l.kt)("h3",{id:"other-related-functions"},"Other related functions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"function require_login($courseorid = null, $autologinguest = true, $cm = null, $setwantsurltome = true, $preventredirect = false)\nfunction require_course_login($courseorid, $autologinguest = true, $cm = null, $setwantsurltome = true, $preventredirect = false)\nfunction get_users_by_capability(context $context, $capability, $fields = _, $sort = _, $limitfrom = _, $limitnum = _,\n                                $groups = _, $exceptions = _, $doanything_ignored = null, $view_ignored = null, $useviewallgroups = false)\nfunction isguestuser($user = null)\nfunction isloggedin()\nfunction is_siteadmin($user_or_id = null)\nfunction is_guest(context $context, $user = null)\nfunction is_viewing(context $context, $user = null, $withcapability = _)\n")),(0,l.kt)("h4",{id:"require_login"},(0,l.kt)("inlineCode",{parentName:"h4"},"require_login()")),(0,l.kt)("p",null,"Each plugin script should include require_login() or require_course_login() after setting up PAGE->url."),(0,l.kt)("p",null,"This function does following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"it verifies that user is logged in before accessing any course or activities (not-logged-in users can not enter any courses)."),(0,l.kt)("li",{parentName:"ul"},"user is logged in as gu"),(0,l.kt)("li",{parentName:"ul"},"verify access to hidden courses and activities"),(0,l.kt)("li",{parentName:"ul"},"if an activity is specified, verify any ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Availability_API"},"availability restrictions")," for the activity"),(0,l.kt)("li",{parentName:"ul"},"verify that user is either enrolled or has capability 'moodle/course:view' or some enrol plugin gives them temporary guest access"),(0,l.kt)("li",{parentName:"ul"},"logs access to courses")),(0,l.kt)("h4",{id:"require_course_login"},(0,l.kt)("inlineCode",{parentName:"h4"},"require_course_login()")),(0,l.kt)("p",null,"This function is supposed to be used only in activities that want to allow read access to content on the frontpage without logging-in. For example view resource files, reading of glossary  entries, etc."),(0,l.kt)("h4",{id:"isguestuser-isloggedin-and-is_siteadmin"},(0,l.kt)("inlineCode",{parentName:"h4"},"isguestuser()"),", ",(0,l.kt)("inlineCode",{parentName:"h4"},"isloggedin()")," and ",(0,l.kt)("inlineCode",{parentName:"h4"},"is_siteadmin()")),(0,l.kt)("p",null,"These function were previously needed for limiting of access of special accounts. It is usually not necessary any more, because any ",(0,l.kt)("em",{parentName:"p"},"write")," or ",(0,l.kt)("em",{parentName:"p"},"risky")," capabilities are now automatically prevented in has_capability()."),(0,l.kt)("p",null,"It is strongly discouraged to use is_siteadmin() in activity modules, please use standard capabilities and enrolment status instead."),(0,l.kt)("h4",{id:"is_guest-is_viewing-and-is_enrolled"},(0,l.kt)("inlineCode",{parentName:"h4"},"is_guest()"),", ",(0,l.kt)("inlineCode",{parentName:"h4"},"is_viewing()")," and ",(0,l.kt)("inlineCode",{parentName:"h4"},"is_enrolled()")),(0,l.kt)("p",null,"In order to access course data one of these functions must return true for user:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_enrolled()")," - user has active record in user_enrolments table"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_viewing()")," - user has 'moodle/course:view' capability (may access course, but is not considered to be participant)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_guest()")," - user was given temporary guest access by some enrolment plugin")),(0,l.kt)("h4",{id:"get_users_by_capability"},(0,l.kt)("inlineCode",{parentName:"h4"},"get_users_by_capability()")),(0,l.kt)("p",null,"This method returns list of users with given capability, it ignores enrolment status and should be used only above the course context."),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Core_APIs"},"Core APIs"),""),(0,l.kt)("li",{parentName:"ul"},"",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Roles"},"Roles"),""),(0,l.kt)("li",{parentName:"ul"},"",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Role_archetypes"},"Role archetypes"),""),(0,l.kt)("li",{parentName:"ul"},"",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Hardening_new_Roles_system"},"Hardening new Roles system"),""),(0,l.kt)("li",{parentName:"ul"},"",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Roles_and_modules"},"Roles and modules"),""),(0,l.kt)("li",{parentName:"ul"},"",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/NEWMODULE_Adding_capabilities"},"NEWMODULE Adding capabilities"),""),(0,l.kt)("li",{parentName:"ul"},"",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/New_permissions_evaluation_in_2.0"},"New permissions evaluation in 2.0"),""),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=257611"},"(Forums) How to check if current user is student?"))))}m.isMDXComponent=!0}}]);