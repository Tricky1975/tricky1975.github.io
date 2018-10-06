const debug=true;

class JB {

	static Assert(mybool,myerror){
		if (!mybool) throw new(error);
	}

	static Chat(chtmessage){
		if (debug) console.log(chtmessage);
	}
	
	static ConsoleWrite(...a){
		let o=""
		for (let a1 of a) {
			o+=a;
		}
		console.log(o);
		consoleoutput.innerHTML += o.replace("\n","<br />");
	}
	
	static ConsoleWriteLine(...a){
		JB.ConsoleWrite(...a);
		JB.ConsoleWrite("\n");
	}
	
	static ConsoleReadLine(q) { return prompt(q || "Input") || ""; }
}


class qstr{
	static Chr(i){ return String.fromCharCode(i); }
	static Left(s,la){ 
		let l = la || 1
		if (l>s.length) return s;
		return s.slice(0,l); 
	}
	static Prefixed(s,p){ return qstr.Left(s,p.length)===p; }
	static Right(s,la){
		let l = la || 1;
		if (l > s.length) return s;
		return s.slice(-l);
	}
	static Suffixed(s,p) { return qstr.Right(s,p.length)===p; }
	static Len(s) { return s.length; } // Just for compatibility issues caused by the translation
	static ToInt(s) { return Number(s); } // Just for compatibility issues caused by the translation

}


// This is based on the C# source

    //delegate void tit();

    class T_itmap     { 

        //static public Dictionary<string, tit> map = new Dictionary<string, tit>();
        

        execute(af) //static public void execute(string af)
        {
            var f = af.toUpperCase();
            if (this.map[f])
            {
                //tit t = map[f];
                let t = this.map[f];
                t();
                SpamProgrammingLanguage.last = f;
            }
        }

        add(fn,f) //static void add(string fn, tit f)
        {
            this.map[fn.toUpperCase()] = f;
        }

/*
        //Global itmap : titmap = New titmap
        static int Pointer { get { return SpamProgrammingLanguage.Pointer; } set { SpamProgrammingLanguage.Pointer = value; } }
        static byte[] Memory { get { return SpamProgrammingLanguage.Memory; } }
        static bool check { get { return SpamProgrammingLanguage.check; } set { SpamProgrammingLanguage.check = value; } }
        */
        set Pointer(value) { SpamProgrammingLanguage.Pointer = value; }
        get Pointer() { return SpamProgrammingLanguage.Pointer; }
        get Memory() { return SpamProgrammingLanguage.Memory; }
        get check() { return SpamProgrammingLanguage.check; }
        set check(value) { SpamProgrammingLanguage.check = value; }
        constructor() {
			this.map = {}
            this.add("BET",  () => { JB.ConsoleWrite(qstr.Chr(SpamProgrammingLanguage.Memory[SpamProgrammingLanguage.Pointer])); }); //Function it_chrshow()   WriteStdout Chr(memory[Pointer]) End Function; itmap.add "BET",it_chrshow   ' Show character of current value
            this.add("SHOW",  () => { JB.ConsoleWrite(SpamProgrammingLanguage.Memory[SpamProgrammingLanguage.Pointer]); }); //Function it_bteshow()   WriteStdout memory[pointer] End Function; itmap.add "SHOW",it_bteshow   ' Show current byte value
            this.add("WIN", () => { 
				SpamProgrammingLanguage.Memory[SpamProgrammingLanguage.Pointer]++; 
				while (SpamProgrammingLanguage.Memory[SpamProgrammingLanguage.Pointer]>255) SpamProgrammingLanguage.Memory[SpamProgrammingLanguage.Pointer]-=256; // needed within scripting as 'byte' does not exist here...
			}); //Function it_win()   Memory[Pointer]:+1 End Function; itmap.add "WIN",it_win     ' Increase value by 1
            this.add("CASINO", () => { 
				this.Memory[this.Pointer]--; 
				while(this.Memory[this.Pointer]<0) this.Memory[this.Pointer]+=256;
				}); //Function it_casino()    memory[Pointer]:-1 End Function; itmap.add "CASINO",it_casino   ' Decrease value by 1
            this.add("CHECK",  () => { 				
				this.check = this.Memory[this.Pointer] != 0; 
				JB.Chat(`CHECK: ${this.check} <= Pointer:${this.Pointer}; Mem:${this.Memory[this.Pointer]}`);
				}); //Function it_check() check=Memory[pointer] End Function;     itmap.add "CHECK",it_check  ' If the current value is 0, skip the next valid command
            this.add("NEXT", () => { JB.ConsoleWriteLine(); }); //Function it_next()  Print; End Function             itmap.add "NEXT",it_next
            this.add("VIAGRA",  () => {
                let i = Math.abs(qstr.ToLong(JB.ConsoleReadLine("Please enter a number:")));
                let b = BitConverter.GetBytes(i);
                let e = 1;
                for (let ak = 1; ak < 7; ak++)
                {
                    if (i > Math.pow(256, ak)) e = ak + 1;
                }
                let tp = this.Pointer;
                for (let ak = 0; ak < e; ak++)
                {
                    Memory[tp] = b[ak];
                    tp++;
                    if (tp >= this.Memory.Length) tp = 0;
                }
            });
            this.add("DIPLOMA", () => {
                let s = JB.ConsoleReadLine("Please enter a string:");
                let tp = this.Pointer;
                JB.Chat(`${s} len:${s.length}`);
                for (let ak = 0; ak < s.length; ak++)
                {
                    if (SpamProgrammingLanguage.MaxString >= 0 && ak >= SpamProgrammingLanguage.MaxString) break;
                    this.Memory[tp]=s.charCodeAt(ak);
                    while(this.Memory[tp]>255) this.Memory[tp]-=256; // It's only bytes after all. Sorry UNICODE junkies, this is what you get for using a byte-only esotoric language :P
                    tp++;
                    if (tp >= this.Memory.Length) tp = 0;
                }
            });
            this.add("MONEY", () => {
                this.Pointer++;
                if (this.Pointer >= this.Memory.Length) this.Pointer = 0;
            });
            this.add("CASH", () => {
                this.Pointer--;
                if (this.Pointer < 0) this.Pointer = (this.Memory.Length - 1);
            });
        }
    }

    let itmap = new T_itmap();



    const newbytebuffer = (bufsize) => {
		let ret=[];
		for (let i=0;i<bufsize;i++) ret.push(0);
		return ret;
	}

    class T_SpamProgrammingLanguage {

        //const bool allowchat = false; // True when debugging only!!
        
        reset(){
				console.log("Resetting VM");
                this.Memory = newbytebuffer(1024); //new byte[1024];
                this.Pointer = 0;
                this.labels = {} //new Dictionary<string, int>();
                this.curl = 0;
                this.check = true;
                this.last = "";
                this.MaxString = -1;
                this.code = null;
                //this.AppArgs=null; // Most likely not required!
			}



        //static void Print(string a = "") => Console.WriteLine(a);
        Print(a){JB.ConsoleWriteLine(a || "");}
        // static string StripAll(string a) => "LATER"; // unneeded!
        //static void ChangeDir(string cd) => Console.WriteLine("CD comes later"); // Unneeded!

        Parse(){
			/* files are NOT being loaded, but taken from the HTML model!
            var src = AppArgs[0];
            if (qstr.ExtractExt(src) == "") src += ".spam";
            Chat("Parsing: " + src);
            var BT = QOpen.ReadFile(src);
            var word = "";
            var tcode = new List<string>();
            byte X = 0;
            while (!BT.EOF)
            */
            console.log("Parsing");
            let word="";
            let tcode=[];
            let sourcecode=document.getElementById("sourcecode").value; 
            for (var i = 0; i < sourcecode.length; ++i) {
				let X = sourcecode.charCodeAt(i);            
                //X = BT.ReadByte();
                if (X === 13 || X === 10 || X === 9 || X === 32)
                {
                    tcode.push(word.toUpperCase());
                    word = "";
                }
                else
                {
                    word += qstr.Chr(X);
                }
            }
            //BT.Close();
            
            this.code = []; //new String[tcode.Count];
            let c = 0;
            for (let w of tcode)
            {
				//JB.Chat("Parsing word: "+w);
                this.code.push(w); c++;
                if (qstr.Prefixed(w, "HTTP://")) this.labels[qstr.Right(w, w.length - 7)] = c; //MapInsert labels,Right(w,(Len w)-7),"$"+Hex(c)
            }
            
            //this.code=tcode;
        }


/*
        static void Chat(string A)
        { // debug
            if (allowchat) Print("CHAT: " + A);
        }
*/

/*        static public void Main(string[] AAppArgs)*/
        Run(){
			//itmap = new T_itmap();
			console.clear();
			consoleoutput.innerHTML="";
			this.reset();
			/*
            AppArgs = AAppArgs;
            MKL.Version("Spam Programming Language - Spam.cs", "18.09.22");
            MKL.Lic("Spam Programming Language - Spam.cs", "GNU General Public License 3");
            if (AppArgs.Length < 1)
            */
            if (!document.getElementById("sourcecode").value)
            {
                //QOpen.Hello();
                //qstr.Right("spam", 4); // Does nothing, I know, but MKL needs to to parse it all right :P
                this.Print("Spam Programming Language - Web version"); // "+MKL.Newest);
                this.Print("Set up by Jeroen Broks");
                this.Print("Try to make programming code look like spam folks!");
                //Print();
                //Print("Usage: spam <program>[.spam]");
                return;
            }
            //ChangeDir(LaunchDir);
            this.Parse();
            console.log("Running!");
            while (this.curl < this.code.length)
            {
                let cw = this.code[this.curl];
                //Chat(curl + "> " + cw);
                if (!this.check)
                {
                    this.curl++;
                    this.check = this.labels[cw] || itmap.map[cw];
                }
                else if (this.labels[cw])
                {
                    this.curl = this.labels[cw];
                }
                else if (qstr.Prefixed(cw, "$"))
                {
                    this.MaxString = qstr.ToInt(qstr.Right(cw, qstr.Len(cw) - 1));
                    //'Print maxstring
                    this.curl++;
                }
                else if (qstr.Prefixed(cw, "X"))
                {
                    if (this.last != "" && this.last != "CHECK")
                    {
                        let times = qstr.ToInt(qstr.Right(cw, qstr.Len(cw) - 1));
                        JB.Chat(`l=${qstr.Len(cw)} cw=${cw} times=${times}   r=${qstr.Right(cw, qstr.Len(cw) - 1)}`);
                        for (let i = 1; i < times; i++) itmap.execute(this.last);
                    }
                    this.curl++;
                }
                else if (qstr.Suffixed(cw, "X"))
                {
                    if (this.last != "" && this.last != "CHECK")
                    {
                        let times = qstr.ToInt(qstr.Left(cw, qstr.Len(cw) - 1));
                        for (let i = 1; i < times; i++) itmap.execute(this.last);
                    }
                    this.curl++;
                }
                else
                {
                    itmap.execute(cw);
                    this.curl++;
                }
                //JB.Chat("<checkup>"); for (let k in this) { if (typeof(k)!="function") JB.Chat(`${k}\t=${JSON.stringify(this[k])}`);} JB.Chat("</checkup>\n\n"); 
            }
            console.log("Done");
        }
        
        PRun(){
			try{
				this.Run();
			}catch(e){
				this.Print(`<span style='color:#ff0000'>ERROR!</span><br>${e.message} in <span style='color:ffff00'>${e.fileName}:<span style='color:#ff00ff'>${e.lineNumber}`);
			} finally {
				this.Print("FIX IT!!!");
			}
		}
    }


let SpamProgrammingLanguage = new T_SpamProgrammingLanguage();

