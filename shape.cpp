#include<iostream.h>
using namespace std;
class Person{
    public:
    string name[10];
    int code[10],n;
    void info(){
        cout<<"Number of details to be filled:";
        cin>>n;
        cout<<"Enter names:";
        for(int i=1;i<=n;i++){
            cin>>name[i];
        }
        cout<<"Enter code:";
        for(int i=1;i<=n;i++){
            cin>>code[i];
        }
    }
};
class Account:public Person{
    int pay[10];
    void pay_info(){
       cout<<"Payment:";
        for(int i=1;i<=n;i++){
            cin>>code[i];
        } 
    }
};
class admin:public Person{
    int exp[10];
    void exp_info(){
        cout<<"Enter experience:";
        for(int i=1;i<=n;i++){
            cin>>exp[i];
        }
    }
};
class person:public Account,public admin{
    void display(){
        cout<<"Name \t   Code  \t  Experience   \t pay"<<endl;
        for(int i=1;i<=n;i++){
            cout<<name[i]<"  \t"<<code[i]<<"   \t"<<exp[i]<<"     \t"<<pay[i];
        }
    }
};
int main(){
    int c,u,ind,item;
    person p;
    cout<<"Create:";
    p.info();
    p.pay_info();
    p.exp_info();
    cout<<"Enter \n1.update \n2.display:"
    cin>>c;
    if(c==1){
        cout<<"Updation is to done in\n1.code\n2.pay\n3.experience and also write index:";
        cin>>u,ind;
        cout<<"ENTER ITEM:";
        cin>>item;
        if(u==1){
            code[ind]=item;
        }
        if(u==2){
            pay[ind]=item;
        }
        if(u==1){
            exp[ind]=item;
        }
    }
    else{
        p.display();
    }
    return 0;
}