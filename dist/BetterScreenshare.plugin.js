/**
* @name BetterScreenshare
* @version 1.0.1
* @author Phil
* @description With this plugin you can customize your resolution, framerate, bitrate and more for your screenshare!
* @authorId 305288513941667851
* @source https://github.com/philhk/better-discord-screenshare-plugin
 */
var Qt=Object.defineProperty;var Jt=(b,L,A)=>L in b?Qt(b,L,{enumerable:!0,configurable:!0,writable:!0,value:A}):b[L]=A;var C=(b,L,A)=>(Jt(b,typeof L!="symbol"?L+"":L,A),A);/*!
 * GNU GENERAL PUBLIC LICENSE
 * Version 3, 29 June 2007
 * 
 * Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 * Everyone is permitted to copy and distribute verbatim copies
 * of this license document, but changing it is not allowed.
 * 
 * Preamble
 * 
 * The GNU General Public License is a free, copyleft license for
 * software and other kinds of works.
 * 
 * The licenses for most software and other practical works are designed
 * to take away your freedom to share and change the works. By contrast,
 * the GNU General Public License is intended to guarantee your freedom to
 * share and change all versions of a program--to make sure it remains free
 * software for all its users. We, the Free Software Foundation, use the
 * GNU General Public License for most of our software; it applies also to
 * any other work released this way by its authors. You can apply it to
 * your programs, too.
 * 
 * When we speak of free software, we are referring to freedom, not
 * price. Our General Public Licenses are designed to make sure that you
 * have the freedom to distribute copies of free software (and charge for
 * them if you wish), that you receive source code or can get it if you
 * want it, that you can change the software or use pieces of it in new
 * free programs, and that you know you can do these things.
 * 
 * To protect your rights, we need to prevent others from denying you
 * these rights or asking you to surrender the rights. Therefore, you have
 * certain responsibilities if you distribute copies of the software, or if
 * you modify it: responsibilities to respect the freedom of others.
 * 
 * For example, if you distribute copies of such a program, whether
 * gratis or for a fee, you must pass on to the recipients the same
 * freedoms that you received. You must make sure that they, too, receive
 * or can get the source code. And you must show them these terms so they
 * know their rights.
 * 
 * Developers that use the GNU GPL protect your rights with two steps:
 * (1) assert copyright on the software, and (2) offer you this License
 * giving you legal permission to copy, distribute and/or modify it.
 * 
 * For the developers' and authors' protection, the GPL clearly explains
 * that there is no warranty for this free software. For both users' and
 * authors' sake, the GPL requires that modified versions be marked as
 * changed, so that their problems will not be attributed erroneously to
 * authors of previous versions.
 * 
 * Some devices are designed to deny users access to install or run
 * modified versions of the software inside them, although the manufacturer
 * can do so. This is fundamentally incompatible with the aim of
 * protecting users' freedom to change the software. The systematic
 * pattern of such abuse occurs in the area of products for individuals to
 * use, which is precisely where it is most unacceptable. Therefore, we
 * have designed this version of the GPL to prohibit the practice for those
 * products. If such problems arise substantially in other domains, we
 * stand ready to extend this provision to those domains in future versions
 * of the GPL, as needed to protect the freedom of users.
 * 
 * Finally, every program is threatened constantly by software patents.
 * States should not allow patents to restrict development and use of
 * software on general-purpose computers, but in those that do, we wish to
 * avoid the special danger that patents applied to a free program could
 * make it effectively proprietary. To prevent this, the GPL assures that
 * patents cannot be used to render the program non-free.
 * 
 * The precise terms and conditions for copying, distribution and
 * modification follow.
 * 
 * TERMS AND CONDITIONS
 * 
 * 0. Definitions.
 * 
 * "This License" refers to version 3 of the GNU General Public License.
 * 
 * "Copyright" also means copyright-like laws that apply to other kinds of
 * works, such as semiconductor masks.
 * 
 * "The Program" refers to any copyrightable work licensed under this
 * License. Each licensee is addressed as "you". "Licensees" and
 * "recipients" may be individuals or organizations.
 * 
 * To "modify" a work means to copy from or adapt all or part of the work
 * in a fashion requiring copyright permission, other than the making of an
 * exact copy. The resulting work is called a "modified version" of the
 * earlier work or a work "based on" the earlier work.
 * 
 * A "covered work" means either the unmodified Program or a work based
 * on the Program.
 * 
 * To "propagate" a work means to do anything with it that, without
 * permission, would make you directly or secondarily liable for
 * infringement under applicable copyright law, except executing it on a
 * computer or modifying a private copy. Propagation includes copying,
 * distribution (with or without modification), making available to the
 * public, and in some countries other activities as well.
 * 
 * To "convey" a work means any kind of propagation that enables other
 * parties to make or receive copies. Mere interaction with a user through
 * a computer network, with no transfer of a copy, is not conveying.
 * 
 * An interactive user interface displays "Appropriate Legal Notices"
 * to the extent that it includes a convenient and prominently visible
 * feature that (1) displays an appropriate copyright notice, and (2)
 * tells the user that there is no warranty for the work (except to the
 * extent that warranties are provided), that licensees may convey the
 * work under this License, and how to view a copy of this License. If
 * the interface presents a list of user commands or options, such as a
 * menu, a prominent item in the list meets this criterion.
 * 
 * 1. Source Code.
 * 
 * The "source code" for a work means the preferred form of the work
 * for making modifications to it. "Object code" means any non-source
 * form of a work.
 * 
 * A "Standard Interface" means an interface that either is an official
 * standard defined by a recognized standards body, or, in the case of
 * interfaces specified for a particular programming language, one that
 * is widely used among developers working in that language.
 * 
 * The "System Libraries" of an executable work include anything, other
 * than the work as a whole, that (a) is included in the normal form of
 * packaging a Major Component, but which is not part of that Major
 * Component, and (b) serves only to enable use of the work with that
 * Major Component, or to implement a Standard Interface for which an
 * implementation is available to the public in source code form. A
 * "Major Component", in this context, means a major essential component
 * (kernel, window system, and so on) of the specific operating system
 * (if any) on which the executable work runs, or a compiler used to
 * produce the work, or an object code interpreter used to run it.
 * 
 * The "Corresponding Source" for a work in object code form means all
 * the source code needed to generate, install, and (for an executable
 * work) run the object code and to modify the work, including scripts to
 * control those activities. However, it does not include the work's
 * System Libraries, or general-purpose tools or generally available free
 * programs which are used unmodified in performing those activities but
 * which are not part of the work. For example, Corresponding Source
 * includes interface definition files associated with source files for
 * the work, and the source code for shared libraries and dynamically
 * linked subprograms that the work is specifically designed to require,
 * such as by intimate data communication or control flow between those
 * subprograms and other parts of the work.
 * 
 * The Corresponding Source need not include anything that users
 * can regenerate automatically from other parts of the Corresponding
 * Source.
 * 
 * The Corresponding Source for a work in source code form is that
 * same work.
 * 
 * 2. Basic Permissions.
 * 
 * All rights granted under this License are granted for the term of
 * copyright on the Program, and are irrevocable provided the stated
 * conditions are met. This License explicitly affirms your unlimited
 * permission to run the unmodified Program. The output from running a
 * covered work is covered by this License only if the output, given its
 * content, constitutes a covered work. This License acknowledges your
 * rights of fair use or other equivalent, as provided by copyright law.
 * 
 * You may make, run and propagate covered works that you do not
 * convey, without conditions so long as your license otherwise remains
 * in force. You may convey covered works to others for the sole purpose
 * of having them make modifications exclusively for you, or provide you
 * with facilities for running those works, provided that you comply with
 * the terms of this License in conveying all material for which you do
 * not control copyright. Those thus making or running the covered works
 * for you must do so exclusively on your behalf, under your direction
 * and control, on terms that prohibit them from making any copies of
 * your copyrighted material outside their relationship with you.
 * 
 * Conveying under any other circumstances is permitted solely under
 * the conditions stated below. Sublicensing is not allowed; section 10
 * makes it unnecessary.
 * 
 * 3. Protecting Users' Legal Rights From Anti-Circumvention Law.
 * 
 * No covered work shall be deemed part of an effective technological
 * measure under any applicable law fulfilling obligations under article
 * 11 of the WIPO copyright treaty adopted on 20 December 1996, or
 * similar laws prohibiting or restricting circumvention of such
 * measures.
 * 
 * When you convey a covered work, you waive any legal power to forbid
 * circumvention of technological measures to the extent such circumvention
 * is effected by exercising rights under this License with respect to
 * the covered work, and you disclaim any intention to limit operation or
 * modification of the work as a means of enforcing, against the work's
 * users, your or third parties' legal rights to forbid circumvention of
 * technological measures.
 * 
 * 4. Conveying Verbatim Copies.
 * 
 * You may convey verbatim copies of the Program's source code as you
 * receive it, in any medium, provided that you conspicuously and
 * appropriately publish on each copy an appropriate copyright notice;
 * keep intact all notices stating that this License and any
 * non-permissive terms added in accord with section 7 apply to the code;
 * keep intact all notices of the absence of any warranty; and give all
 * recipients a copy of this License along with the Program.
 * 
 * You may charge any price or no price for each copy that you convey,
 * and you may offer support or warranty protection for a fee.
 * 
 * 5. Conveying Modified Source Versions.
 * 
 * You may convey a work based on the Program, or the modifications to
 * produce it from the Program, in the form of source code under the
 * terms of section 4, provided that you also meet all of these conditions:
 * 
 * a) The work must carry prominent notices stating that you modified
 * it, and giving a relevant date.
 * 
 * b) The work must carry prominent notices stating that it is
 * released under this License and any conditions added under section
 * 7.  This requirement modifies the requirement in section 4 to
 * "keep intact all notices".
 * 
 * c) You must license the entire work, as a whole, under this
 * License to anyone who comes into possession of a copy.  This
 * License will therefore apply, along with any applicable section 7
 * additional terms, to the whole of the work, and all its parts,
 * regardless of how they are packaged.  This License gives no
 * permission to license the work in any other way, but it does not
 * invalidate such permission if you have separately received it.
 * 
 * d) If the work has interactive user interfaces, each must display
 * Appropriate Legal Notices; however, if the Program has interactive
 * interfaces that do not display Appropriate Legal Notices, your
 * work need not make them do so.
 * 
 * A compilation of a covered work with other separate and independent
 * works, which are not by their nature extensions of the covered work,
 * and which are not combined with it such as to form a larger program,
 * in or on a volume of a storage or distribution medium, is called an
 * "aggregate" if the compilation and its resulting copyright are not
 * used to limit the access or legal rights of the compilation's users
 * beyond what the individual works permit. Inclusion of a covered work
 * in an aggregate does not cause this License to apply to the other
 * parts of the aggregate.
 * 
 * 6. Conveying Non-Source Forms.
 * 
 * You may convey a covered work in object code form under the terms
 * of sections 4 and 5, provided that you also convey the
 * machine-readable Corresponding Source under the terms of this License,
 * in one of these ways:
 * 
 * a) Convey the object code in, or embodied in, a physical product
 * (including a physical distribution medium), accompanied by the
 * Corresponding Source fixed on a durable physical medium
 * customarily used for software interchange.
 * 
 * b) Convey the object code in, or embodied in, a physical product
 * (including a physical distribution medium), accompanied by a
 * written offer, valid for at least three years and valid for as
 * long as you offer spare parts or customer support for that product
 * model, to give anyone who possesses the object code either (1) a
 * copy of the Corresponding Source for all the software in the
 * product that is covered by this License, on a durable physical
 * medium customarily used for software interchange, for a price no
 * more than your reasonable cost of physically performing this
 * conveying of source, or (2) access to copy the
 * Corresponding Source from a network server at no charge.
 * 
 * c) Convey individual copies of the object code with a copy of the
 * written offer to provide the Corresponding Source.  This
 * alternative is allowed only occasionally and noncommercially, and
 * only if you received the object code with such an offer, in accord
 * with subsection 6b.
 * 
 * d) Convey the object code by offering access from a designated
 * place (gratis or for a charge), and offer equivalent access to the
 * Corresponding Source in the same way through the same place at no
 * further charge.  You need not require recipients to copy the
 * Corresponding Source along with the object code.  If the place to
 * copy the object code is a network server, the Corresponding Source
 * may be on a different server (operated by you or a third party)
 * that supports equivalent copying facilities, provided you maintain
 * clear directions next to the object code saying where to find the
 * Corresponding Source.  Regardless of what server hosts the
 * Corresponding Source, you remain obligated to ensure that it is
 * available for as long as needed to satisfy these requirements.
 * 
 * e) Convey the object code using peer-to-peer transmission, provided
 * you inform other peers where the object code and Corresponding
 * Source of the work are being offered to the general public at no
 * charge under subsection 6d.
 * 
 * A separable portion of the object code, whose source code is excluded
 * from the Corresponding Source as a System Library, need not be
 * included in conveying the object code work.
 * 
 * A "User Product" is either (1) a "consumer product", which means any
 * tangible personal property which is normally used for personal, family,
 * or household purposes, or (2) anything designed or sold for incorporation
 * into a dwelling. In determining whether a product is a consumer product,
 * doubtful cases shall be resolved in favor of coverage. For a particular
 * product received by a particular user, "normally used" refers to a
 * typical or common use of that class of product, regardless of the status
 * of the particular user or of the way in which the particular user
 * actually uses, or expects or is expected to use, the product. A product
 * is a consumer product regardless of whether the product has substantial
 * commercial, industrial or non-consumer uses, unless such uses represent
 * the only significant mode of use of the product.
 * 
 * "Installation Information" for a User Product means any methods,
 * procedures, authorization keys, or other information required to install
 * and execute modified versions of a covered work in that User Product from
 * a modified version of its Corresponding Source. The information must
 * suffice to ensure that the continued functioning of the modified object
 * code is in no case prevented or interfered with solely because
 * modification has been made.
 * 
 * If you convey an object code work under this section in, or with, or
 * specifically for use in, a User Product, and the conveying occurs as
 * part of a transaction in which the right of possession and use of the
 * User Product is transferred to the recipient in perpetuity or for a
 * fixed term (regardless of how the transaction is characterized), the
 * Corresponding Source conveyed under this section must be accompanied
 * by the Installation Information. But this requirement does not apply
 * if neither you nor any third party retains the ability to install
 * modified object code on the User Product (for example, the work has
 * been installed in ROM).
 * 
 * The requirement to provide Installation Information does not include a
 * requirement to continue to provide support service, warranty, or updates
 * for a work that has been modified or installed by the recipient, or for
 * the User Product in which it has been modified or installed. Access to a
 * network may be denied when the modification itself materially and
 * adversely affects the operation of the network or violates the rules and
 * protocols for communication across the network.
 * 
 * Corresponding Source conveyed, and Installation Information provided,
 * in accord with this section must be in a format that is publicly
 * documented (and with an implementation available to the public in
 * source code form), and must require no special password or key for
 * unpacking, reading or copying.
 * 
 * 7. Additional Terms.
 * 
 * "Additional permissions" are terms that supplement the terms of this
 * License by making exceptions from one or more of its conditions.
 * Additional permissions that are applicable to the entire Program shall
 * be treated as though they were included in this License, to the extent
 * that they are valid under applicable law. If additional permissions
 * apply only to part of the Program, that part may be used separately
 * under those permissions, but the entire Program remains governed by
 * this License without regard to the additional permissions.
 * 
 * When you convey a copy of a covered work, you may at your option
 * remove any additional permissions from that copy, or from any part of
 * it. (Additional permissions may be written to require their own
 * removal in certain cases when you modify the work.) You may place
 * additional permissions on material, added by you to a covered work,
 * for which you have or can give appropriate copyright permission.
 * 
 * Notwithstanding any other provision of this License, for material you
 * add to a covered work, you may (if authorized by the copyright holders of
 * that material) supplement the terms of this License with terms:
 * 
 * a) Disclaiming warranty or limiting liability differently from the
 * terms of sections 15 and 16 of this License; or
 * 
 * b) Requiring preservation of specified reasonable legal notices or
 * author attributions in that material or in the Appropriate Legal
 * Notices displayed by works containing it; or
 * 
 * c) Prohibiting misrepresentation of the origin of that material, or
 * requiring that modified versions of such material be marked in
 * reasonable ways as different from the original version; or
 * 
 * d) Limiting the use for publicity purposes of names of licensors or
 * authors of the material; or
 * 
 * e) Declining to grant rights under trademark law for use of some
 * trade names, trademarks, or service marks; or
 * 
 * f) Requiring indemnification of licensors and authors of that
 * material by anyone who conveys the material (or modified versions of
 * it) with contractual assumptions of liability to the recipient, for
 * any liability that these contractual assumptions directly impose on
 * those licensors and authors.
 * 
 * All other non-permissive additional terms are considered "further
 * restrictions" within the meaning of section 10. If the Program as you
 * received it, or any part of it, contains a notice stating that it is
 * governed by this License along with a term that is a further
 * restriction, you may remove that term. If a license document contains
 * a further restriction but permits relicensing or conveying under this
 * License, you may add to a covered work material governed by the terms
 * of that license document, provided that the further restriction does
 * not survive such relicensing or conveying.
 * 
 * If you add terms to a covered work in accord with this section, you
 * must place, in the relevant source files, a statement of the
 * additional terms that apply to those files, or a notice indicating
 * where to find the applicable terms.
 * 
 * Additional terms, permissive or non-permissive, may be stated in the
 * form of a separately written license, or stated as exceptions;
 * the above requirements apply either way.
 * 
 * 8. Termination.
 * 
 * You may not propagate or modify a covered work except as expressly
 * provided under this License. Any attempt otherwise to propagate or
 * modify it is void, and will automatically terminate your rights under
 * this License (including any patent licenses granted under the third
 * paragraph of section 11).
 * 
 * However, if you cease all violation of this License, then your
 * license from a particular copyright holder is reinstated (a)
 * provisionally, unless and until the copyright holder explicitly and
 * finally terminates your license, and (b) permanently, if the copyright
 * holder fails to notify you of the violation by some reasonable means
 * prior to 60 days after the cessation.
 * 
 * Moreover, your license from a particular copyright holder is
 * reinstated permanently if the copyright holder notifies you of the
 * violation by some reasonable means, this is the first time you have
 * received notice of violation of this License (for any work) from that
 * copyright holder, and you cure the violation prior to 30 days after
 * your receipt of the notice.
 * 
 * Termination of your rights under this section does not terminate the
 * licenses of parties who have received copies or rights from you under
 * this License. If your rights have been terminated and not permanently
 * reinstated, you do not qualify to receive new licenses for the same
 * material under section 10.
 * 
 * 9. Acceptance Not Required for Having Copies.
 * 
 * You are not required to accept this License in order to receive or
 * run a copy of the Program. Ancillary propagation of a covered work
 * occurring solely as a consequence of using peer-to-peer transmission
 * to receive a copy likewise does not require acceptance. However,
 * nothing other than this License grants you permission to propagate or
 * modify any covered work. These actions infringe copyright if you do
 * not accept this License. Therefore, by modifying or propagating a
 * covered work, you indicate your acceptance of this License to do so.
 * 
 * 10. Automatic Licensing of Downstream Recipients.
 * 
 * Each time you convey a covered work, the recipient automatically
 * receives a license from the original licensors, to run, modify and
 * propagate that work, subject to this License. You are not responsible
 * for enforcing compliance by third parties with this License.
 * 
 * An "entity transaction" is a transaction transferring control of an
 * organization, or substantially all assets of one, or subdividing an
 * organization, or merging organizations. If propagation of a covered
 * work results from an entity transaction, each party to that
 * transaction who receives a copy of the work also receives whatever
 * licenses to the work the party's predecessor in interest had or could
 * give under the previous paragraph, plus a right to possession of the
 * Corresponding Source of the work from the predecessor in interest, if
 * the predecessor has it or can get it with reasonable efforts.
 * 
 * You may not impose any further restrictions on the exercise of the
 * rights granted or affirmed under this License. For example, you may
 * not impose a license fee, royalty, or other charge for exercise of
 * rights granted under this License, and you may not initiate litigation
 * (including a cross-claim or counterclaim in a lawsuit) alleging that
 * any patent claim is infringed by making, using, selling, offering for
 * sale, or importing the Program or any portion of it.
 * 
 * 11. Patents.
 * 
 * A "contributor" is a copyright holder who authorizes use under this
 * License of the Program or a work on which the Program is based. The
 * work thus licensed is called the contributor's "contributor version".
 * 
 * A contributor's "essential patent claims" are all patent claims
 * owned or controlled by the contributor, whether already acquired or
 * hereafter acquired, that would be infringed by some manner, permitted
 * by this License, of making, using, or selling its contributor version,
 * but do not include claims that would be infringed only as a
 * consequence of further modification of the contributor version. For
 * purposes of this definition, "control" includes the right to grant
 * patent sublicenses in a manner consistent with the requirements of
 * this License.
 * 
 * Each contributor grants you a non-exclusive, worldwide, royalty-free
 * patent license under the contributor's essential patent claims, to
 * make, use, sell, offer for sale, import and otherwise run, modify and
 * propagate the contents of its contributor version.
 * 
 * In the following three paragraphs, a "patent license" is any express
 * agreement or commitment, however denominated, not to enforce a patent
 * (such as an express permission to practice a patent or covenant not to
 * sue for patent infringement). To "grant" such a patent license to a
 * party means to make such an agreement or commitment not to enforce a
 * patent against the party.
 * 
 * If you convey a covered work, knowingly relying on a patent license,
 * and the Corresponding Source of the work is not available for anyone
 * to copy, free of charge and under the terms of this License, through a
 * publicly available network server or other readily accessible means,
 * then you must either (1) cause the Corresponding Source to be so
 * available, or (2) arrange to deprive yourself of the benefit of the
 * patent license for this particular work, or (3) arrange, in a manner
 * consistent with the requirements of this License, to extend the patent
 * license to downstream recipients. "Knowingly relying" means you have
 * actual knowledge that, but for the patent license, your conveying the
 * covered work in a country, or your recipient's use of the covered work
 * in a country, would infringe one or more identifiable patents in that
 * country that you have reason to believe are valid.
 * 
 * If, pursuant to or in connection with a single transaction or
 * arrangement, you convey, or propagate by procuring conveyance of, a
 * covered work, and grant a patent license to some of the parties
 * receiving the covered work authorizing them to use, propagate, modify
 * or convey a specific copy of the covered work, then the patent license
 * you grant is automatically extended to all recipients of the covered
 * work and works based on it.
 * 
 * A patent license is "discriminatory" if it does not include within
 * the scope of its coverage, prohibits the exercise of, or is
 * conditioned on the non-exercise of one or more of the rights that are
 * specifically granted under this License. You may not convey a covered
 * work if you are a party to an arrangement with a third party that is
 * in the business of distributing software, under which you make payment
 * to the third party based on the extent of your activity of conveying
 * the work, and under which the third party grants, to any of the
 * parties who would receive the covered work from you, a discriminatory
 * patent license (a) in connection with copies of the covered work
 * conveyed by you (or copies made from those copies), or (b) primarily
 * for and in connection with specific products or compilations that
 * contain the covered work, unless you entered into that arrangement,
 * or that patent license was granted, prior to 28 March 2007.
 * 
 * Nothing in this License shall be construed as excluding or limiting
 * any implied license or other defenses to infringement that may
 * otherwise be available to you under applicable patent law.
 * 
 * 12. No Surrender of Others' Freedom.
 * 
 * If conditions are imposed on you (whether by court order, agreement or
 * otherwise) that contradict the conditions of this License, they do not
 * excuse you from the conditions of this License. If you cannot convey a
 * covered work so as to satisfy simultaneously your obligations under this
 * License and any other pertinent obligations, then as a consequence you may
 * not convey it at all. For example, if you agree to terms that obligate you
 * to collect a royalty for further conveying from those to whom you convey
 * the Program, the only way you could satisfy both those terms and this
 * License would be to refrain entirely from conveying the Program.
 * 
 * 13. Use with the GNU Affero General Public License.
 * 
 * Notwithstanding any other provision of this License, you have
 * permission to link or combine any covered work with a work licensed
 * under version 3 of the GNU Affero General Public License into a single
 * combined work, and to convey the resulting work. The terms of this
 * License will continue to apply to the part which is the covered work,
 * but the special requirements of the GNU Affero General Public License,
 * section 13, concerning interaction through a network will apply to the
 * combination as such.
 * 
 * 14. Revised Versions of this License.
 * 
 * The Free Software Foundation may publish revised and/or new versions of
 * the GNU General Public License from time to time. Such new versions will
 * be similar in spirit to the present version, but may differ in detail to
 * address new problems or concerns.
 * 
 * Each version is given a distinguishing version number. If the
 * Program specifies that a certain numbered version of the GNU General
 * Public License "or any later version" applies to it, you have the
 * option of following the terms and conditions either of that numbered
 * version or of any later version published by the Free Software
 * Foundation. If the Program does not specify a version number of the
 * GNU General Public License, you may choose any version ever published
 * by the Free Software Foundation.
 * 
 * If the Program specifies that a proxy can decide which future
 * versions of the GNU General Public License can be used, that proxy's
 * public statement of acceptance of a version permanently authorizes you
 * to choose that version for the Program.
 * 
 * Later license versions may give you additional or different
 * permissions. However, no additional obligations are imposed on any
 * author or copyright holder as a result of your choosing to follow a
 * later version.
 * 
 * 15. Disclaimer of Warranty.
 * 
 * THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
 * APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
 * HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
 * OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
 * IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
 * ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
 * 
 * 16. Limitation of Liability.
 * 
 * IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
 * WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
 * THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
 * GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
 * USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
 * DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
 * PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
 * EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGES.
 * 
 * 17. Interpretation of Sections 15 and 16.
 * 
 * If the disclaimer of warranty and limitation of liability provided
 * above cannot be given local legal effect according to their terms,
 * reviewing courts shall apply local law that most closely approximates
 * an absolute waiver of all civil liability in connection with the
 * Program, unless a warranty or assumption of liability accompanies a
 * copy of the Program in return for a fee.
 * 
 * END OF TERMS AND CONDITIONS
 * 
 * How to Apply These Terms to Your New Programs
 * 
 * If you develop a new program, and you want it to be of the greatest
 * possible use to the public, the best way to achieve this is to make it
 * free software which everyone can redistribute and change under these terms.
 * 
 * To do so, attach the following notices to the program. It is safest
 * to attach them to the start of each source file to most effectively
 * state the exclusion of warranty; and each file should have at least
 * the "copyright" line and a pointer to where the full notice is found.
 * 
 * <one line to give the program's name and a brief idea of what it does.>
 * Copyright (C) <year>  <name of author>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * Also add information on how to contact you by electronic and paper mail.
 * 
 * If the program does terminal interaction, make it output a short
 * notice like this when it starts in an interactive mode:
 * 
 * <program>  Copyright (C) <year>  <name of author>
 * This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
 * This is free software, and you are welcome to redistribute it
 * under certain conditions; type `show c' for details.
 * 
 * The hypothetical commands `show w' and `show c' should show the appropriate
 * parts of the General Public License. Of course, your program's commands
 * might be different; for a GUI interface, you would use an "about box".
 * 
 * You should also get your employer (if you work as a programmer) or school,
 * if any, to sign a "copyright disclaimer" for the program, if necessary.
 * For more information on this, and how to apply and follow the GNU GPL, see
 * <https://www.gnu.org/licenses/>.
 * 
 * The GNU General Public License does not permit incorporating your program
 * into proprietary programs. If your program is a subroutine library, you
 * may consider it more useful to permit linking proprietary applications with
 * the library. If this is what you want to do, use the GNU Lesser General
 * Public License instead of this License. But first, please read
 * <https://www.gnu.org/licenses/why-not-lgpl.html>.
 */(function(b){var Je;"use strict";let L=null;const A=()=>{if(L)return L;throw Error("Accessing meta before initialization")},$e=e=>{L=e},Ye=e=>BdApi.Data.load(A().name,e),Xe=(e,t)=>BdApi.Data.save(A().name,e,t),Ae=(...e)=>t=>t instanceof Object&&e.every(r=>r in t),Y=(...e)=>t=>t instanceof Object&&t.prototype instanceof Object&&e.every(r=>r in t.prototype),k=(...e)=>t=>{var r,n;for(;t instanceof Object&&"$$typeof"in t;)t=t.render??t.type;if(t instanceof Function){const o=t.toString(),s=(n=(r=t.prototype)==null?void 0:r.render)==null?void 0:n.toString();return e.every(a=>typeof a=="string"?o.includes(a)||(s==null?void 0:s.includes(a)):a(o)||s&&a(s))}else return!1},Ze=(e,t)=>{const r=new Map(Object.entries(t));return new Proxy(e,{get(n,o){return n[r.get(o)??o]},set(n,o,s){return n[r.get(o)??o]=s,!0},deleteProperty(n,o){return delete n[r.get(o)??o],r.delete(o),!0},has(n,o){return r.has(o)||o in n},ownKeys(){return[...r.keys(),...Object.keys(e)]},getOwnPropertyDescriptor(n,o){return Object.getOwnPropertyDescriptor(n,r.get(o)??o)},defineProperty(n,o,s){return Object.defineProperty(n,r.get(o)??o,s),!0}})},z=(e,{resolve:t=!0,entries:r=!1}={})=>BdApi.Webpack.getModule(e,{defaultExport:t,searchExports:r}),V=(e,t)=>z(Ae(...e),t),X=(e,t)=>z(k(...e),t),Ie=(e,t,r=!1)=>{const n=t??Object.keys(e),o=z(s=>s instanceof Object&&s!==window&&n.every(a=>Object.values(s).some(f=>e[a](f))));return r?Ze(o,Object.fromEntries(Object.entries(e).map(([s,a])=>{var f;return[s,(f=Object.entries(o??{}).find(([,h])=>a(h)))==null?void 0:f[0]]}))):Object.fromEntries(Object.entries(e).map(([s,a])=>[s,Object.values(o??{}).find(f=>a(f))]))};new AbortController;const qe="#3a71c1",et=(e,...t)=>e(`%c[${A().name}] %c${A().version?`(v${A().version})`:""}`,`color: ${qe}; font-weight: 700;`,"color: #666; font-size: .8em;",...t),Z=(...e)=>et(console.log,...e),tt=(e,t,r,n,o)=>{const s=t==null?void 0:t[r];if(!(s instanceof Function))throw TypeError(`patch target ${s} is not a function`);const a=BdApi.Patcher[e](A().name,t,r,o.once?(...f)=>{const h=n(a,s,...f);return a(),h}:(...f)=>n(a,s,...f));return o.silent||Z(`Patched ${o.name??String(r)}`),a},Ce=(e,t,r,n={})=>tt("after",e,t,(o,s,a,f,h)=>r({cancel:o,original:s,context:a,args:f,result:h}),n);let q=[];const rt=()=>{if(q.length+BdApi.Patcher.getPatchesByCaller(A().name).length>0){for(const e of q)e();q=[],BdApi.Patcher.unpatchAll(A().name),Z("Unpatched all")}},W=Ie({default:Ae("Store","connectStores"),Dispatcher:Y("dispatch"),Store:Y("emitChange"),BatchedStoreListener:Y("attach","detach"),useStateFromStores:k("useStateFromStores")},["Store","Dispatcher","useStateFromStores"]),{React:G}=BdApi,{ReactDOM:ee}=BdApi;BdApi.ContextMenu,Ie({Select:k(".renderOptionLabel",".renderOptionValue"),SingleSelect:k("select:","onChange:")},["Select"]),X(["pendingReply"]),G==null||G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,(Je=ee==null?void 0:ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null||Je.Events;const nt=(e,t)=>{var n;const r=[e].flat();for(;r.length!==0;){const o=r.shift();if(t(o))return o;(n=o==null?void 0:o.props)!=null&&n.children&&r.push(...[o.props.children].flat())}return null};class $t extends W.Store{constructor(r,n){super(new W.Dispatcher,{update:()=>{for(const o of this.listeners)o(this.current)}});C(this,"defaults");C(this,"current");C(this,"onLoad");C(this,"listeners");this.listeners=new Set,this.defaults=r,this.onLoad=n}load(){var r;this.current={...this.defaults,...Ye("settings")},(r=this.onLoad)==null||r.call(this),this._dispatch(!1)}_dispatch(r){this._dispatcher.dispatch({type:"update"}),r&&Xe("settings",this.current)}update(r){Object.assign(this.current,typeof r=="function"?r(this.current):r),this._dispatch(!0)}reset(){this.current={...this.defaults},this._dispatch(!0)}delete(...r){for(const n of r)delete this.current[n];this._dispatch(!0)}useCurrent(){return W.useStateFromStores([this],()=>this.current,void 0,()=>!1)}useSelector(r,n,o){return W.useStateFromStores([this],()=>r(this.current),n,o)}useState(){return W.useStateFromStores([this],()=>[this.current,r=>this.update(r)])}useStateWithDefaults(){return W.useStateFromStores([this],()=>[this.current,this.defaults,r=>this.update(r)])}useListener(r,n){G.useEffect(()=>(this.addListener(r),()=>this.removeListener(r)),n??[r])}addListener(r){return this.listeners.add(r),r}removeListener(r){this.listeners.delete(r)}removeAllListeners(){this.listeners.clear()}}const ot=(()=>({name:"BetterScreenshare",version:"1.0.1",author:"Phil",description:"With this plugin you can customize your resolution, framerate, bitrate and more for your screenshare!",authorId:"305288513941667851",source:"https://github.com/philhk/better-discord-screenshare-plugin"}))();class st{}class Q{static addListener(t,r,n,o){t[r](n,o);const s={emitter:t,event:n,fn:o};return this.events.push(s),()=>this.removeListener(s)}static removeListener(t){t.emitter.removeListener(t.event,t.fn),this.events=this.events.filter(r=>r!==t)}static removeAllListeners(){this.events.forEach(t=>t.emitter.removeListener(t.event,t.fn)),this.events=[]}}C(Q,"events",[]);const De=e=>{if(typeof e=="object"&&e!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}return Object.prototype.toString.call(e)==="[object Object]"}return!1},B=(...e)=>e.reduce((t,r)=>{if(Array.isArray(r))throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");return Object.keys(r).forEach(n=>{["__proto__","constructor","prototype"].includes(n)||(Array.isArray(t[n])&&Array.isArray(r[n])?t[n]=B.options.mergeArrays?Array.from(new Set(t[n].concat(r[n]))):r[n]:De(t[n])&&De(r[n])?t[n]=B(t[n],r[n]):t[n]=r[n])}),t},{}),Le={mergeArrays:!0};B.options=Le,B.withOptions=(e,...t)=>{B.options=Object.assign({mergeArrays:!0},e);const r=B(...t);return B.options=Le,r};const Re={get MediaEngineStore(){return V(["getAttenuateWhileSpeakingOthers"])},get StreamStore(){return V(["getAllActiveStreams","getStreamForUser"])}},Be={get Utils(){return V(["getPidFromDesktopSource"])},get Dispatcher(){return V(["isDispatching","subscribe"])}},te={get Dropdown(){return X(["value","onChange","serialize","isSelected"],{entries:!0})},get TextInput(){return z(e=>{var t;return((t=e==null?void 0:e.defaultProps)==null?void 0:t.type)==="text"},{entries:!0})},get Location(){return X(["_loadDate","getLocation","mergeLocation"])}},it={get Text(){return V(["h5"])}},at=te.Dropdown,Te=te.TextInput,ct=Te.Sizes,ut=te.Location,lt=it.Text,dt=Be.Utils,ht=Be.Dispatcher,re=Re.MediaEngineStore,ft=Re.StreamStore,Me=e=>{let t;const r=new Set,n=(h,c)=>{const S=typeof h=="function"?h(t):h;if(!Object.is(S,t)){const l=t;t=c??typeof S!="object"?S:Object.assign({},t,S),r.forEach(m=>m(t,l))}},o=()=>t,f={setState:n,getState:o,subscribe:h=>(r.add(h),()=>r.delete(h)),destroy:()=>{({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,o,f),f},pt=e=>e?Me(e):Me;function mt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ne={},St={get exports(){return ne},set exports(e){ne=e}},oe={},J={},gt={get exports(){return J},set exports(e){J=e}},se={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe;function vt(){if(Pe)return se;Pe=1;var e=b;function t(l,m){return l===m&&(l!==0||1/l===1/m)||l!==l&&m!==m}var r=typeof Object.is=="function"?Object.is:t,n=e.useState,o=e.useEffect,s=e.useLayoutEffect,a=e.useDebugValue;function f(l,m){var p=m(),v=n({inst:{value:p,getSnapshot:m}}),d=v[0].inst,u=v[1];return s(function(){d.value=p,d.getSnapshot=m,h(d)&&u({inst:d})},[l,p,m]),o(function(){return h(d)&&u({inst:d}),l(function(){h(d)&&u({inst:d})})},[l]),a(p),p}function h(l){var m=l.getSnapshot;l=l.value;try{var p=m();return!r(l,p)}catch{return!0}}function c(l,m){return m()}var S=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?c:f;return se.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:S,se}var ie={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe;function Et(){return xe||(xe=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=b,t=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function r(y){{for(var E=arguments.length,w=new Array(E>1?E-1:0),i=1;i<E;i++)w[i-1]=arguments[i];n("error",y,w)}}function n(y,E,w){{var i=t.ReactDebugCurrentFrame,O=i.getStackAddendum();O!==""&&(E+="%s",w=w.concat([O]));var R=w.map(function(I){return String(I)});R.unshift("Warning: "+E),Function.prototype.apply.call(console[y],console,R)}}function o(y,E){return y===E&&(y!==0||1/y===1/E)||y!==y&&E!==E}var s=typeof Object.is=="function"?Object.is:o,a=e.useState,f=e.useEffect,h=e.useLayoutEffect,c=e.useDebugValue,S=!1,l=!1;function m(y,E,w){S||e.startTransition!==void 0&&(S=!0,r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var i=E();if(!l){var O=E();s(i,O)||(r("The result of getSnapshot should be cached to avoid an infinite loop"),l=!0)}var R=a({inst:{value:i,getSnapshot:E}}),I=R[0].inst,U=R[1];return h(function(){I.value=i,I.getSnapshot=E,p(I)&&U({inst:I})},[y,i,E]),f(function(){p(I)&&U({inst:I});var ye=function(){p(I)&&U({inst:I})};return y(ye)},[y]),c(i),i}function p(y){var E=y.getSnapshot,w=y.value;try{var i=E();return!s(w,i)}catch{return!0}}function v(y,E,w){return E()}var d=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",u=!d,g=u?v:m,_=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:g;ie.useSyncExternalStore=_,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),ie}var Fe;function je(){return Fe||(Fe=1,function(e){process.env.NODE_ENV==="production"?e.exports=vt():e.exports=Et()}(gt)),J}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We;function yt(){if(We)return oe;We=1;var e=b,t=je();function r(c,S){return c===S&&(c!==0||1/c===1/S)||c!==c&&S!==S}var n=typeof Object.is=="function"?Object.is:r,o=t.useSyncExternalStore,s=e.useRef,a=e.useEffect,f=e.useMemo,h=e.useDebugValue;return oe.useSyncExternalStoreWithSelector=function(c,S,l,m,p){var v=s(null);if(v.current===null){var d={hasValue:!1,value:null};v.current=d}else d=v.current;v=f(function(){function g(i){if(!_){if(_=!0,y=i,i=m(i),p!==void 0&&d.hasValue){var O=d.value;if(p(O,i))return E=O}return E=i}if(O=E,n(y,i))return O;var R=m(i);return p!==void 0&&p(O,R)?O:(y=i,E=R)}var _=!1,y,E,w=l===void 0?null:l;return[function(){return g(S())},w===null?void 0:function(){return g(w())}]},[S,l,m,p]);var u=o(c,v[0],v[1]);return a(function(){d.hasValue=!0,d.value=u},[u]),h(u),u},oe}var ae={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He;function _t(){return He||(He=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=b,t=je();function r(S,l){return S===l&&(S!==0||1/S===1/l)||S!==S&&l!==l}var n=typeof Object.is=="function"?Object.is:r,o=t.useSyncExternalStore,s=e.useRef,a=e.useEffect,f=e.useMemo,h=e.useDebugValue;function c(S,l,m,p,v){var d=s(null),u;d.current===null?(u={hasValue:!1,value:null},d.current=u):u=d.current;var g=f(function(){var w=!1,i,O,R=function(K){if(!w){w=!0,i=K;var _e=p(K);if(v!==void 0&&u.hasValue){var Oe=u.value;if(v(Oe,_e))return O=Oe,Oe}return O=_e,_e}var Gt=i,be=O;if(n(Gt,K))return be;var we=p(K);return v!==void 0&&v(be,we)?be:(i=K,O=we,we)},I=m===void 0?null:m,U=function(){return R(l())},ye=I===null?void 0:function(){return R(I())};return[U,ye]},[l,m,p,v]),_=g[0],y=g[1],E=o(S,_,y);return a(function(){u.hasValue=!0,u.value=E},[E]),h(E),E}ae.useSyncExternalStoreWithSelector=c,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),ae}(function(e){process.env.NODE_ENV==="production"?e.exports=yt():e.exports=_t()})(St);const Ot=mt(ne),{useSyncExternalStoreWithSelector:bt}=Ot;function wt(e,t=e.getState,r){const n=bt(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return b.useDebugValue(n),n}const Ve=e=>{({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?pt(e):e,r=(n,o)=>wt(t,n,o);return Object.assign(r,t),r},At=e=>e?Ve(e):Ve;function Ne(e){let t;try{t=e()}catch{return}return{getItem:n=>{var o;const s=f=>f===null?null:JSON.parse(f),a=(o=t.getItem(n))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(n,o)=>t.setItem(n,JSON.stringify(o)),removeItem:n=>t.removeItem(n)}}const N=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then(n){return N(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return N(n)(r)}}}},It=(e,t)=>(r,n,o)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:u=>u,version:0,merge:(u,g)=>({...g,...u}),...t},a=!1;const f=new Set,h=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return e((...u)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...u)},n,o);const S=N(s.serialize),l=()=>{const u=s.partialize({...n()});let g;const _=S({state:u,version:s.version}).then(y=>c.setItem(s.name,y)).catch(y=>{g=y});if(g)throw g;return _},m=o.setState;o.setState=(u,g)=>{m(u,g),l()};const p=e((...u)=>{r(...u),l()},n,o);let v;const d=()=>{var u;if(!c)return;a=!1,f.forEach(_=>_(n()));const g=((u=s.onRehydrateStorage)==null?void 0:u.call(s,n()))||void 0;return N(c.getItem.bind(c))(s.name).then(_=>{if(_)return s.deserialize(_)}).then(_=>{if(_)if(typeof _.version=="number"&&_.version!==s.version){if(s.migrate)return s.migrate(_.state,_.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return _.state}).then(_=>{var y;return v=s.merge(_,(y=n())!=null?y:p),r(v,!0),l()}).then(()=>{g==null||g(v,void 0),a=!0,h.forEach(_=>_(v))}).catch(_=>{g==null||g(void 0,_)})};return o.persist={setOptions:u=>{s={...s,...u},u.getStorage&&(c=u.getStorage())},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>d(),hasHydrated:()=>a,onHydrate:u=>(f.add(u),()=>{f.delete(u)}),onFinishHydration:u=>(h.add(u),()=>{h.delete(u)})},d(),v||p},Ct=(e,t)=>(r,n,o)=>{let s={storage:Ne(()=>localStorage),partialize:d=>d,version:0,merge:(d,u)=>({...u,...d}),...t},a=!1;const f=new Set,h=new Set;let c=s.storage;if(!c)return e((...d)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...d)},n,o);const S=()=>{const d=s.partialize({...n()});return c.setItem(s.name,{state:d,version:s.version})},l=o.setState;o.setState=(d,u)=>{l(d,u),S()};const m=e((...d)=>{r(...d),S()},n,o);let p;const v=()=>{var d;if(!c)return;a=!1,f.forEach(g=>g(n()));const u=((d=s.onRehydrateStorage)==null?void 0:d.call(s,n()))||void 0;return N(c.getItem.bind(c))(s.name).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==s.version){if(s.migrate)return s.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var _;return p=s.merge(g,(_=n())!=null?_:m),r(p,!0),S()}).then(()=>{u==null||u(p,void 0),a=!0,h.forEach(g=>g(p))}).catch(g=>{u==null||u(void 0,g)})};return o.persist={setOptions:d=>{s={...s,...d},d.storage&&(c=d.storage)},clearStorage:()=>{c==null||c.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>v(),hasHydrated:()=>a,onHydrate:d=>(f.add(d),()=>{f.delete(d)}),onFinishHydration:d=>(h.add(d),()=>{h.delete(d)})},v(),p||m},Dt=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),It(e,t)):Ct(e,t),Lt=(e,t)=>t.some(r=>e instanceof r);let Ue,Ke;function Rt(){return Ue||(Ue=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bt(){return Ke||(Ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ke=new WeakMap,ce=new WeakMap,ze=new WeakMap,ue=new WeakMap,le=new WeakMap;function Tt(e){const t=new Promise((r,n)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{r(x(e.result)),o()},a=()=>{n(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(r=>{r instanceof IDBCursor&&ke.set(r,e)}).catch(()=>{}),le.set(t,e),t}function Mt(e){if(ce.has(e))return;const t=new Promise((r,n)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{r(),o()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});ce.set(e,t)}let de={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return ce.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ze.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return x(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Pt(e){de=e(de)}function xt(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(he(this),t,...r);return ze.set(n,t.sort?t.sort():[t]),x(n)}:Bt().includes(e)?function(...t){return e.apply(he(this),t),x(ke.get(this))}:function(...t){return x(e.apply(he(this),t))}}function Ft(e){return typeof e=="function"?xt(e):(e instanceof IDBTransaction&&Mt(e),Lt(e,Rt())?new Proxy(e,de):e)}function x(e){if(e instanceof IDBRequest)return Tt(e);if(ue.has(e))return ue.get(e);const t=Ft(e);return t!==e&&(ue.set(e,t),le.set(t,e)),t}const he=e=>le.get(e);function jt(e,t,{blocked:r,upgrade:n,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),f=x(a);return n&&a.addEventListener("upgradeneeded",h=>{n(x(a.result),h.oldVersion,h.newVersion,x(a.transaction),h)}),r&&a.addEventListener("blocked",h=>r(h.oldVersion,h.newVersion,h)),f.then(h=>{s&&h.addEventListener("close",()=>s()),o&&h.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),f}const Wt=["get","getKey","getAll","getAllKeys","count"],Ht=["put","add","delete","clear"],fe=new Map;function Ge(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fe.get(t))return fe.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,o=Ht.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(o||Wt.includes(r)))return;const s=async function(a,...f){const h=this.transaction(a,o?"readwrite":"readonly");let c=h.store;return n&&(c=c.index(f.shift())),(await Promise.all([c[r](...f),o&&h.done]))[0]};return fe.set(t,s),s}Pt(e=>({...e,get:(t,r,n)=>Ge(t,r)||e.get(t,r,n),has:(t,r)=>!!Ge(t,r)||e.has(t,r)}));const pe=jt("screenshare-plugin-store",1,{upgrade(e){e.createObjectStore("screenshare-plugin")}});async function Vt(e){return(await pe).get("screenshare-plugin",e)}async function Nt(e,t){return(await pe).put("screenshare-plugin",t,e)}async function Ut(e){return(await pe).delete("screenshare-plugin",e)}const Kt={getItem:async e=>await Vt(e)||null,setItem:async(e,t)=>{await Nt(e,t)},removeItem:async e=>{await Ut(e)}},me=e=>e*1e3,$=(e,t)=>{if(!e)return[];const r=[];return Object.entries(e).filter(([n,o])=>typeof o=="function").forEach(([n,o])=>(!(t!=null&&t.filter)||t.filter([n,o]))&&r.push(Ce(e,n,s=>{Z(`${t!=null&&t.name?`[${t.name}] `:""}[${n}]`,s)}))),t!=null&&t.searchProtos?[...r,...$(e.__proto__,t)]:r},T=(e,t)=>{const r=parseInt(e);t(r)},M=e=>typeof e=="number"?e:e?parseInt(e):void 0,D={bitrate:{minimum:1e3,target:2500,maximum:5e3},encode:{framerate:60,height:1080,width:1920},capture:{framerate:60,height:1080,width:1920},audioCodec:"OPUS",videoCodec:"H264"},Qe=At(Dt((e,t)=>({screenshare:{bitrate:{getMaximum:()=>M(t().screenshare.bitrate.maximum)||D.bitrate.maximum,getMinimum:()=>M(t().screenshare.bitrate.minimum)||D.bitrate.minimum,getTarget:()=>M(t().screenshare.bitrate.target)||D.bitrate.target,setMaximum:r=>t().customSet(n=>(n.screenshare.bitrate.maximum=r,n)),setMinimum:r=>t().customSet(n=>(n.screenshare.bitrate.minimum=r,n)),setTarget:r=>t().customSet(n=>(n.screenshare.bitrate.target=r,n))},encode:{getFramerate:()=>M(t().screenshare.encode.framerate)||D.encode.framerate,getWidth:()=>M(t().screenshare.encode.width)||D.encode.width,getHeight:()=>M(t().screenshare.encode.height)||D.encode.height,setFramerate:r=>t().customSet(n=>(n.screenshare.encode.framerate=r,n)),setWidth:r=>t().customSet(n=>(n.screenshare.encode.width=r,n)),setHeight:r=>t().customSet(n=>(n.screenshare.encode.height=r,n))},capture:{getFramerate:()=>M(t().screenshare.capture.framerate)||D.capture.framerate,getWidth:()=>M(t().screenshare.capture.width)||D.capture.width,getHeight:()=>M(t().screenshare.capture.height)||D.capture.height,setFramerate:r=>t().customSet(n=>(n.screenshare.capture.framerate=r,n)),setWidth:r=>t().customSet(n=>(n.screenshare.capture.width=r,n)),setHeight:r=>t().customSet(n=>(n.screenshare.capture.height=r,n))},setAudioCodec:r=>t().customSet(n=>(n.screenshare.audioCodec=r,n)),setVideoCodec:r=>t().customSet(n=>(n.screenshare.videoCodec=r,n)),setAudioSource:r=>t().customSet(n=>(n.screenshare.audioSource=r,n)),setKeyframeInterval:r=>t().customSet(n=>(n.screenshare.keyframeInterval=r,n)),getAudioCodec:()=>t().screenshare.audioCodec||D.audioCodec,getVideoCodec:()=>t().screenshare.videoCodec||D.videoCodec,getKeyframeInterval:()=>M(t().screenshare.keyframeInterval),getAudioSource:()=>t().screenshare.audioSource},customSet:r=>{e(n=>B(n,r(n)||n))}}),{name:"BetterScreensharePlugin",storage:Ne(()=>Kt),merge:(e,t)=>B(t,e)})),Se=e=>b.createElement(at,e),P=e=>b.createElement(Te,{...e,...e.size?{size:ct[e.size]}:{}}),{h5:kt}=lt,ge=re.getMediaEngine(),j=e=>BdApi.React.createElement("div",{style:{width:"100%"}},BdApi.React.createElement("h1",{style:{marginTop:"12px",marginBottom:"8px"},className:[kt].join(" ")},e.title),BdApi.React.createElement("div",{style:{width:"100%",display:"flex",gap:"6px"}},...e.settingElements.map(t=>BdApi.React.createElement("div",{style:{flex:"1 1 0"}},t)))),zt=()=>{const{audioSource:e,audioCodec:t,videoCodec:r,bitrate:n,capture:o,encode:s,keyframeInterval:a,setAudioCodec:f,setVideoCodec:h,setAudioSource:c,setKeyframeInterval:S}=Qe(i=>i.screenshare),[l,m]=b.useState(),[p,v]=b.useState();b.useEffect(()=>{const i=setInterval(async()=>{v(await ge.getWindowPreviews(1,1))},4e3);return()=>clearInterval(i)},[]),b.useEffect(()=>{(async()=>{const i=JSON.parse(await new Promise(O=>ge.getCodecCapabilities(O)));m(i),v(await ge.getWindowPreviews(1,1))})()},[]),b.useEffect(()=>{p&&(p.some(i=>!e||[i.id,"none","default"].includes(e))||c(void 0))},[p]);const d={title:"Capture",settingElements:[BdApi.React.createElement(P,{placeholder:"Width",type:"number",value:o.width,onChange:i=>T(i,o.setWidth)}),BdApi.React.createElement(P,{placeholder:"Height",type:"number",value:o.height,onChange:i=>T(i,o.setHeight)}),BdApi.React.createElement(P,{placeholder:"Framerate",type:"number",value:o.framerate,onChange:i=>T(i,o.setFramerate)})]},u={title:"Encode",settingElements:[BdApi.React.createElement(P,{placeholder:"Width",type:"number",value:s.width,onChange:i=>T(i,s.setWidth)}),BdApi.React.createElement(P,{placeholder:"Height",type:"number",value:s.height,onChange:i=>T(i,s.setHeight)}),BdApi.React.createElement(P,{placeholder:"Framerate",type:"number",value:s.framerate,onChange:i=>T(i,s.setFramerate)})]},g={title:"Bitrate (kbit/s)",settingElements:[BdApi.React.createElement(P,{placeholder:"Minimum",type:"number",value:n.minimum,onChange:i=>T(i,n.setMinimum)}),BdApi.React.createElement(P,{placeholder:"Target",type:"number",value:n.target,onChange:i=>T(i,n.setTarget)}),BdApi.React.createElement(P,{placeholder:"Maximum",type:"number",value:n.maximum,onChange:i=>T(i,n.setMaximum)})]},_={title:"Keyframe Interval",settingElements:[BdApi.React.createElement(P,{placeholder:"Interval",type:"number",value:a,onChange:i=>T(i,S)})]},y={title:"Video Codec",settingElements:[BdApi.React.createElement(Se,{options:[...l?l.map(i=>({label:`${i.codec}${i.encode?"":" (Unsupported)"}`,value:i.codec})):[]],onChange:i=>h(i),value:r||"H264"})]},E={title:"Audio Codec",settingElements:[BdApi.React.createElement(Se,{options:[{label:"OPUS",value:"OPUS"}],onChange:i=>f(i),value:t||"OPUS"})]},w={title:"Audio Source",settingElements:[BdApi.React.createElement(Se,{options:[{label:"Default",value:"default"},{label:"None",value:"none"},...p?p.map(({id:i,name:O})=>({label:O,value:i})):[]],onChange:i=>c(i),value:e||"default"})]};return BdApi.React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"5px"}},BdApi.React.createElement(j,{...d}),BdApi.React.createElement(j,{...u}),BdApi.React.createElement(j,{...g}),BdApi.React.createElement("div",{style:{display:"flex",gap:"6px"}},BdApi.React.createElement(j,{...E}),BdApi.React.createElement(j,{...y}),BdApi.React.createElement(j,{..._})),BdApi.React.createElement(j,{...w}))},ve=class{static patch(){this.unpatch();const t=Q.addListener(this.mediaEngine.emitter,"on","connection",n=>{if(n.context!=="stream")return;const o=()=>{const{getAudioCodec:s,getAudioSource:a,getKeyframeInterval:f,getVideoCodec:h,encode:c,capture:S,bitrate:l}=B(D,Qe.getState().screenshare);n.setCodecs(s(),h(),"stream"),n.setDesktopEncodingOptions(c.getWidth(),c.getHeight(),c.getFramerate()),n.overwriteQualityForTesting({encode:{framerate:c.getFramerate(),width:c.getWidth(),height:c.getHeight()},capture:{framerate:S.getFramerate(),width:S.getWidth(),height:S.getHeight()},bitrateMax:me(l.getMaximum()),bitrateMin:me(l.getMinimum()),bitrateTarget:me(l.getTarget())});const m=a();if(m==="none")n.setSoundshareSource(0,!1);else if(m&&m!=="default"){const v=dt.getPidFromDesktopSource(m);v&&n.setSoundshareSource(v,!0)}const p=f();p&&n.setKeyframeInterval(p)};n.on("connected",o)}),r=Ce(ut.prototype,"render",n=>{if(n.context.props.page!=="Go Live Modal")return;const o=n.result.props.children,s=n.result._owner.return.return.return.return.return.return.return.memoizedProps,a=s.modalKey,f=s.closeModal;n.result.props.children=h=>{const c=o(h),S=nt(c,l=>{var m;return((m=l==null?void 0:l.props)==null?void 0:m.type)==="submit"});switch(S!=null&&S.props&&(S.props.onClick=l=>{this.mediaEngine.eachConnection(m=>{if(m.context==="stream"&&m.connectionState==="CONNECTED"){this.mediaEngine.setDesktopSource({id:null});const p=ft.getCurrentUserActiveStream();ht.dispatch({type:"STREAM_STOP",streamKey:`${p.streamType}:${p.guildId?`${p.guildId}:`:""}${p.channelId}:${p.ownerId}`}),f(a)}})}),c.props.value.location.section){case"Stream Settings":const l=c.props.children;l.props.title="Stream Settings",l.props.children.props.children=this.replacedStreamQualityComponent;break}return c}});this.unpatchFunctions.push(t,r)}static unpatch(){this.unpatchFunctions.forEach(t=>t()),this.unpatchFunctions=[]}};let F=ve;C(F,"mediaEngineStore",re),C(F,"mediaEngine",ve.mediaEngineStore.getMediaEngine()),C(F,"replacedStreamQualityComponent",BdApi.React.createElement(zt,null)),C(F,"unpatchFunctions",[]);const Ee=class{static patch(t={}){t.mediaEngineStore&&this.unpatchFunctions.push(...$(this.mediaEngineStore,{searchProtos:!0,name:"MediaEngineStore",filter:([r,n])=>!["isSelfDeaf","isSelfMute","isSupported","isDeaf","isEnabled","supports","supportsInApp","getInputDetected","isMute","isHardwareMute","getOpenH264"].includes(r)})),t.mediaEngine&&this.unpatchFunctions.push(...$(this.mediaEngine,{searchProtos:!0,name:"MediaEngine",filter:([r,n])=>!["emit","supports","supported","eachConnection"].includes(r)})),t.connections&&this.unpatchFunctions.push(Q.addListener(this.mediaEngine.emitter,"on","connection",r=>{this.unpatchFunctions.push(...$(r,{searchProtos:!0,name:"Connection",filter:([n,o])=>!["emit","handleStats","getStats","emitStats","getStreamParameters","setHasActiveVideoOutputSink","getActiveOutputSinkTrackingEnabled"].includes(n)}))}))}static unpatch(){this.unpatchFunctions.forEach(t=>t()),this.unpatchFunctions=[]}};let H=Ee;C(H,"mediaEngineStore",re),C(H,"mediaEngine",Ee.mediaEngineStore.getMediaEngine()),C(H,"unpatchFunctions",[]),module.exports=class extends st{constructor(){super(),$e(ot)}async start(){F.patch()}stop(){rt(),H.unpatch(),F.unpatch(),Q.removeAllListeners()}}})(BdApi.React);
